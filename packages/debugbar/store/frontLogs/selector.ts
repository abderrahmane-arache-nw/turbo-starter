import type { FrontLogsRecord } from "~features/frontendLogs/api/types";

import { useAppSelector } from "../hooks";

export const useFrontLogsSelector = (): Readonly<FrontLogsRecord[]> => useAppSelector((state) => state.frontLogs.value);
