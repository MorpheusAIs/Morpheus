import checkDiskSpace from 'check-disk-space';
import path from 'path';
import os from 'os';
import isElevated from 'native-is-elevated';
import sudo from 'sudo-prompt';
import { ChildProcess } from 'child_process';
import { isDev, appPath } from './../index';
import { logger } from './logger';

export const isElevatedProcess = () => {
  return isElevated();
};

export const getDiskSpaceInformation = async (url: string) => {
  return await checkDiskSpace(url);
};

export const hasEnoughSpace = async (url: string, sizeInBytes: number) => {
  const diskSpace = await checkDiskSpace(url);

  return diskSpace.free > sizeInBytes;
};

export const executeCommandElevated = (command: string, envOptions?: { OLLAMA_MODELS: string }) => {
  const options = {
    name: 'MorpheusAI SubMod',
    icns: './../logo_white.ico',
    ...(envOptions && { ...envOptions }),
  };

  sudo.exec(command, options, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }

    if (stderr) {
      throw stderr;
    }
  });
};

export const createDirectoryElevated = (path: string) => {
  const options = {
    name: 'MorpheusAI SubMod',
    icns: './../logo_white.ico',
  };

  const command = `mkdir ${path}${process.platform !== 'win32' ? ' -p' : ''}`;

  logger.log({
    level: 'info',
    message: `Creating directory with command: ${command}`,
  });

  sudo.exec(command, options, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }

    if (stderr) {
      throw stderr;
    }
  });
};

export const killProcess = (process: ChildProcess) => {
  if (os.platform() === 'win32') {
    sudo.exec(`taskkill /pid ${process.pid} /f /t`, (err) => {
      logger.error(err);
    });
  } else {
    process.kill();
  }
};

export const runDelayed = async <T>(handler: () => Promise<T>, delayInMs = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, delayInMs)).then(async () => await handler());
};

export const getDefaultAppDataPathByPlatform = () => {
  switch (process.platform) {
    case 'win32':
      return path.join(os.homedir(), 'AppData', 'Local', 'MorpheusAI', 'SubMod');
    case 'darwin':
      return path.join(os.homedir(), 'Library', 'Application Support', 'MorpheusAI', 'SubMod');
    case 'linux':
      return path.join(os.homedir(), '.config', 'MorpheusAI', 'SubMod');
    default:
      throw new Error(`Unsupported platform detected: ${process.platform}`);
  }
};

export const getExecutablePathByPlatform = () => {
  switch (process.platform) {
    case 'win32':
      return isDev
        ? path.join(__dirname, '..', 'executables', 'ollama.exe')
        : path.join(appPath, 'resources', 'executables', 'ollama.exe');
    case 'darwin':
      return isDev
        ? path.join(__dirname, '..', 'executables', 'ollama-darwin')
        : path.join(appPath, '..', 'Resources', 'executables', 'ollama-darwin');
    case 'linux':
      return isDev
        ? path.join(__dirname, '..', 'executables', 'ollama-linux')
        : path.join(appPath, 'resources', 'executables', 'ollama-linux');
    default:
      throw new Error(`Unsupported platform detected: ${process.platform}`);
  }
};
