export enum LogLevel {
  Error = "error",
  Log = "log",
  Warn = "warn",
}

export interface FrontLogsRecord {
  message: string;
  level: LogLevel;
}

export type ConsoleMethod = (message: string) => void;

export interface ConsoleMethodObject {
  methodName: LogLevel;
  method: (m: string) => void;
}
