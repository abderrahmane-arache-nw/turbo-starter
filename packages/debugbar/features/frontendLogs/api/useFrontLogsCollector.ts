/* eslint-disable no-console */
import { useEffect } from "react";

import type { ConsoleMethod, ConsoleMethodObject, FrontLogsRecord } from "./types";
import { LogLevel } from "./types";
import { addInterceptedFrontLog } from "./utlis";

export const useFrontLogsCollectors = (): void => {
  const methods: LogLevel[] = [LogLevel.Log, LogLevel.Warn, LogLevel.Error];
  const handleErrors = (event: ErrorEvent) => {
    const log: FrontLogsRecord = {
      message: event.error as string,
      level: LogLevel.Error,
    };
    addInterceptedFrontLog(log);
  };

  useEffect(() => {
    const originalMethods: ConsoleMethodObject[] = [];
    methods.forEach((methodName: LogLevel) => {
      const original = console[methodName] as ConsoleMethod;
      originalMethods.push({
        methodName,
        method: original,
      });
      console[methodName] = (message: string) => {
        const log: FrontLogsRecord = {
          message,
          level: methodName,
        };
        addInterceptedFrontLog(log);
        original(message);
      };
    });
    window.addEventListener("error", handleErrors);

    return () => {
      originalMethods.forEach((methodObj: ConsoleMethodObject) => {
        console[methodObj.methodName] = methodObj.method;
      });
      window.removeEventListener("error", handleErrors);
    };
  }, []);
};
