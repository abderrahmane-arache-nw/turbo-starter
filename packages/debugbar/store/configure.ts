import { dbQueriesReducer } from "~store/DBQueries/slice";

import { exceptionsReducer } from "./excpetions/slice";
import { frontLogsReducer } from "./frontLogs/slice";
import { networkReducer } from "./network/slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dbQueries: dbQueriesReducer,
    network: networkReducer,
    exceptions: exceptionsReducer,
    frontLogs: frontLogsReducer,
  },
});
