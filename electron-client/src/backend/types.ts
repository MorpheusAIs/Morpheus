import { IpcMainEvent } from 'electron';

export type OllamaQuestion = {
  model: string;
  query: string;
};

export interface IpcMainEventExtended extends IpcMainEvent {
  status: string;
}
