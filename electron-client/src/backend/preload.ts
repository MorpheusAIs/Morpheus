import { contextBridge, ipcRenderer } from 'electron';
import { ChatResponse, ListResponse, ModelResponse } from 'ollama';
import { IpcChannel, IpcMainChannel, OllamaChannel } from '../events';
import { OllamaQuestion } from './types';

contextBridge.exposeInMainWorld('backendBridge', {
  main: {
    init: () => invokeNoParam<boolean>(IpcChannel.AppInit),
    onInit: (callback: (result: boolean) => void) =>
      ipcRenderer.on(IpcChannel.AppInit, (_, value: boolean) => callback(value)),
    sendInit: () => ipcRenderer.send(IpcChannel.AppInit),
    getFolderPath: () => invokeNoParam<string>(IpcChannel.GetModelsPath),
    setFolderPath: () => invokeNoParam<boolean>(IpcChannel.SetFolderPath),
    close: () => ipcRenderer.send(IpcChannel.Close),
    minimize: () => ipcRenderer.send(IpcChannel.Minimize),
  },
  ollama: {
    init: (result: boolean) => invokeNoParam<boolean>(OllamaChannel.OllamaInit, result),
    onStatusUpdate: (callback: (status: string) => void) =>
      ipcRenderer.on(OllamaChannel.OllamaStatusUpdate, (_, status) => callback(status)),
    // question: (question: string) => ipcRenderer.invoke(OllamaChannel.OllamaQuestion, question),
    question: ({ model, query }: OllamaQuestion) =>
      ipcRenderer.invoke(OllamaChannel.OllamaQuestion, { model, query }) as Promise<ChatResponse>,
    onAnswer: (callback: (response: ChatResponse) => void) =>
      ipcRenderer.on(OllamaChannel.OllamaAnswer, (_, response) => callback(response)),
    getAllModels: () => invokeNoParam<ListResponse>(OllamaChannel.OllamaGetAllModels),
    getModel: (model: string) =>
      invoke<string[], ModelResponse>(OllamaChannel.OllamaGetModel, model),
  },
  removeAllListeners(channel: string) {
    ipcRenderer.removeAllListeners(channel);
  },
});

function invoke<P extends any[], R>(channel: string, ...args: P) {
  return ipcRenderer.invoke(channel, ...args) as Promise<R>;
}

function invokeNoParam<R>(channel: string, ...args: any[]) {
  return ipcRenderer.invoke(channel, ...args) as Promise<R>;
}
