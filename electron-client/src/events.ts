export enum IpcChannel {
  AppInit = 'app:init',
  GetModelsPath = 'app:getfolder',
  SetFolderPath = 'app:setfolder',
  Close = 'app:close',
  Minimize = 'app:minimize',
}

export enum OllamaChannel {
  OllamaInit = 'ollama:init',
  OllamaStatusUpdate = 'ollama:status',
  OllamaGetAllModels = 'ollama:getallmodels',
  OllamaQuestion = 'ollama:question',
  OllamaAnswer = 'ollama:answer',
  OllamaGetModel = 'ollama:getmodel',
}

export enum IpcMainChannel {
  Error = 'main:error',
  CommandOuput = 'command:output',
}
