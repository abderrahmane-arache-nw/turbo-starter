import type { ExceptionRecord } from "~features/exceptions/api/types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ExceptionsCollectorState {
  value: ExceptionRecord[];
}

const initialState: ExceptionsCollectorState = {
  value: [],
};

const exceptionsSlice = createSlice({
  name: "exceptionsCollector",
  initialState,
  reducers: {
    appendExceptionRecord: (state, action: PayloadAction<ExceptionRecord>) => {
      return {
        value: [...state.value, action.payload],
      };
    },
  },
});

export const { appendExceptionRecord } = exceptionsSlice.actions;
export const { reducer: exceptionsReducer } = exceptionsSlice;
