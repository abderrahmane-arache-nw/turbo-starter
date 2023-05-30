import { store } from "~store/configure";
import { appendFrontLogs } from "~store/frontLogs/slice";

import type { FrontLogsRecord } from "./types";

export const addInterceptedFrontLog = (record: FrontLogsRecord): void => {
  store.dispatch(appendFrontLogs(record));
};
