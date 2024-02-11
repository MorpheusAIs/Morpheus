import { app, ipcMain } from 'electron';
import { Ollama, ProgressResponse } from 'ollama';
import { execFile, ChildProcess } from 'child_process';
import fs from 'fs';
import { isDev, sendOllamaStatusToRenderer } from '..';

// events
import { IpcMainChannel, OllamaChannel } from '../../events';
import {
  createDirectoryElevated,
  executeCommandElevated,
  getDefaultAppDataPathByPlatform,
  getExecutablePathByPlatform,
  killProcess,
  runDelayed,
} from './system';

// storage
import { getModelPathFromStorage } from '../storage';
import { logger } from './logger';

// constants
const DEFAULT_OLLAMA_URL = 'http://127.0.0.1:11434/';
const DEFAULT_OLLAMA_MODEL = 'mistral';

// commands
export const SERVE_OLLAMA_CMD = 'ollama serve';
export const WSL_SERVE_OLLAMA_CMD = 'wsl ollama serve';

// ollama instance
let ollama: Ollama;
let ollamaProcess: ChildProcess | null;

export const loadOllama = async () => {
  let runningInstance = await isOllamaInstanceRunning();

  if (runningInstance) {
    // connect to local instance
    ollama = new Ollama({
      host: DEFAULT_OLLAMA_URL,
    });

    await sendOllamaStatusToRenderer(
      `Local instance of ollama is running and connected at ${DEFAULT_OLLAMA_URL}`,
    );

    return true;
  }

  const customAppData = getModelPathFromStorage();
  runningInstance = await packedExecutableOllamaSpawn(customAppData);

  if (runningInstance) {
    // connect to local instance
    ollama = new Ollama({
      host: DEFAULT_OLLAMA_URL,
    });

    await sendOllamaStatusToRenderer(
      `Local instance of ollama is running and connected at ${DEFAULT_OLLAMA_URL}`,
    );

    return true;
  }

  ipcMain.emit(IpcMainChannel.Error, `Couldn't start Ollama locally.`);

  return false;
};

export const isOllamaInstanceRunning = async (url?: string): Promise<boolean> => {
  try {
    const usedUrl = url ?? DEFAULT_OLLAMA_URL;

    await sendOllamaStatusToRenderer(`Checking if ollama instance is running at ${usedUrl}`);

    const ping = await fetch(usedUrl);

    return ping.status === 200;
  } catch (err) {
    return false;
  }
};

export const packedExecutableOllamaSpawn = async (customDataPath?: string) => {
  await sendOllamaStatusToRenderer(`Trying to spawn locally installed ollama`);

  try {
    spawnLocalExecutable(customDataPath);
  } catch (err) {
    console.error(err);
  }

  return await runDelayed(isOllamaInstanceRunning, 10000);
};

export const devRunLocalWSLOllama = (customDataPath?: string) => {
  executeCommandElevated(
    WSL_SERVE_OLLAMA_CMD,
    customDataPath ? { OLLAMA_MODELS: customDataPath } : undefined,
  );
};

export const spawnLocalExecutable = async (customDataPath?: string) => {
  try {
    const { executablePath, appDataPath } = getOllamaExecutableAndAppDataPath(customDataPath);

    if (!fs.existsSync(appDataPath)) {
      createDirectoryElevated(appDataPath);
    }

    const env = {
      ...process.env,
      OLLAMA_MODELS: appDataPath,
    };

    ollamaProcess = execFile(executablePath, ['serve'], { env }, (err, stdout, stderr) => {
      if (err) {
        throw new Error(`exec error: ${err.message}`);
      }

      if (stderr) {
        throw new Error(`stderr: ${stderr}`);
      }
    });
  } catch (err) {
    logger.error(err);
  }
};

export const getOllamaExecutableAndAppDataPath = (
  customDataPath?: string,
): {
  executablePath: string;
  appDataPath: string;
} => {
  const appDataPath = customDataPath || app.getPath('userData');
  const executablePath = getExecutablePathByPlatform();

  return {
    executablePath,
    appDataPath,
  };
};

export const askOllama = async (model: string, message: string) => {
  return await ollama.chat({
    model,
    messages: [
      {
        role: 'user',
        content: `${message}`,
      },
    ],
  });
};

export const getOrPullModel = async (model: string) => {
  await installModelWithStatus(model);

  return findModel(model);
};

export const installModelWithStatus = async (model: string) => {
  const stream = await ollama.pull({
    model,
    stream: true,
  });

  for await (const part of stream) {
    if (part.digest) {
      let percent = 0;

      if (part.completed && part.total) {
        percent = Math.round((part.completed / part.total) * 100);

        await sendOllamaStatusToRenderer(`${part.status} ${percent}%`);
      }
    } else {
      await sendOllamaStatusToRenderer(`${part.status}`);
    }
  }
};

export const findModel = async (model: string) => {
  const allModels = await ollama.list();

  return allModels.models.find((m) => m.name.toLowerCase().includes(model));
};

export const getAllLocalModels = async () => {
  return await ollama.list();
};

export const consumeStream = async (stream: AsyncGenerator<ProgressResponse, any, unknown>) => {
  for await (const part of stream) {
    if (part.digest) {
      let percent = 0;

      if (part.completed && part.total) {
        percent = Math.round((part.completed / part.total) * 100);

        return `${part.status} ${percent}%`;
      }
    } else {
      return part.status;
    }
  }
};

export const stopOllama = async () => {
  if (!ollamaProcess) {
    return;
  }

  killProcess(ollamaProcess);

  ollamaProcess.removeAllListeners();
  ollamaProcess = null;
};
