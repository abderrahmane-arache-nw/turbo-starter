import type { FrontLogsRecord } from "~features/frontendLogs/api/types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FrontCollectorState {
  value: FrontLogsRecord[];
}

const initialState: FrontCollectorState = {
  value: [],
};

const networkSlice = createSlice({
  name: "networkCollector",
  initialState,
  reducers: {
    appendFrontLogs: (state, action: PayloadAction<FrontLogsRecord>) => {
      return {
        value: [...state.value, action.payload],
      };
    },
  },
});

export const { appendFrontLogs } = networkSlice.actions;

export const { reducer: frontLogsReducer } = networkSlice;
