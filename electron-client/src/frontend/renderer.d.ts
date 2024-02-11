import { ChatResponse, ListResponse, ModelResponse } from 'ollama';

export interface BackendBridge {
  main: {
    init: () => Promise<boolean>;
    onInit: (callback: (result: boolean) => void) => Electron.IpcRenderer;
    sendInit: () => void;
    getFolderPath: () => Promise<string>;
    setFolderPath: () => Promise<boolean>;
    close: () => void;
    minimize: () => void;
  };
  ollama: {
    init: () => Promise<boolean>;
    onStatusUpdate: (callback: (status: string) => void) => Electron.IpcRenderer;
    question: ({ model, question }: OllamaQuestion) => Promise<ChatResponse>;
    onAnswer: (callback: (response: ChatResponse) => void) => Electron.IpcRenderer;
    getAllModels: () => Promise<ListResponse>;
    getModel: (model: string) => Promise<ModelResponse>;
  };
  removeAllListeners: (channel: string) => void;
}

declare global {
  interface Window {
    backendBridge: BackendBridge;
  }
}
