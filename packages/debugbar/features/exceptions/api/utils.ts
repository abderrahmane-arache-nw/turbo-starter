import { store } from "~store/configure";
import { appendExceptionRecord } from "~store/excpetions/slice";

import type { ExceptionRecord } from "./types";

import type { IMessage } from "@stomp/stompjs";

export const appendCollectedExceptions = (message: IMessage): void => {
  store.dispatch(appendExceptionRecord(JSON.parse(message.body) as ExceptionRecord));
};
