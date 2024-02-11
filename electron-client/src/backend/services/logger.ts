import winston from 'winston';
import path from 'path';
import { isDev } from '..';
import { app } from 'electron';

const logFilePath = isDev ? '.' : app.getPath('userData');

export const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logFilePath, 'error.log'),
      maxFiles: 1,
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(logFilePath, 'app.log'),
      maxFiles: 1,
      level: 'info',
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logFilePath, 'exceptions.log'),
    }),
  ],
  exitOnError: false,
});
