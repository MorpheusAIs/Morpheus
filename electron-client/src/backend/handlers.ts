import { dialog } from 'electron';

import { IpcChannel } from './../events';
import {
  loadOllama,
  stopOllama,
  getAllLocalModels,
  askOllama,
  getOrPullModel,
} from './services/ollama';
import { OllamaQuestion } from './types';
import { saveModelPathToStorage, getModelPathFromStorage } from './storage';

export const initOllama = async (_: Electron.IpcMainEvent) => {
  try {
    const ollamaLoaded = await loadOllama();

    return ollamaLoaded;
  } catch (err) {
    handleError(err);

    return false;
  }
};

export const stopOllamaServe = async () => {
  await stopOllama();
};

export const getAllModels = async (_: Electron.IpcMainEvent) => {
  try {
    const models = await getAllLocalModels();

    return models;
    // event.reply(OllamaChannel.OllamaGetAllModels, models);
  } catch (err) {
    handleError(err);
  }
};

export const getModel = async (_: Electron.IpcMainEvent, model: string) => {
  try {
    const response = await getOrPullModel(model);

    return response;
  } catch (err) {
    handleError(err);
  }
};

export const askOlama = async (_: Electron.IpcMainEvent, { model, query }: OllamaQuestion) => {
  try {
    const response = await askOllama(model, query);

    return response;
  } catch (err) {
    handleError(err);
  }
};

export const getModelsFolderPath = async (_: Electron.IpcMainEvent) => {
  return getModelPathFromStorage();
};

export const setModelFolderPath = async (_: Electron.IpcMainEvent) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory', 'createDirectory'],
  });

  if (result.filePaths) {
    saveModelPathToStorage(result.filePaths[0]);
  }

  return true;
};

const handleError = (err: Error) => {
  console.error(err);

  // log with winston here
};
