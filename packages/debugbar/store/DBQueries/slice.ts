import type { DBQueriesRecord } from "~features/DBQueries/api/types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DBQueriesCollectorState {
  value: DBQueriesRecord[];
}

const initialState: DBQueriesCollectorState = {
  value: [],
};

const dbQueriesSlice = createSlice({
  name: "dbQueriesCollector",
  initialState,
  reducers: {
    appendDBQueriesRecord: (state, action: PayloadAction<DBQueriesRecord>) => {
      return {
        value: [...state.value, action.payload],
      };
    },
  },
});

export const { appendDBQueriesRecord } = dbQueriesSlice.actions;
export const { reducer: dbQueriesReducer } = dbQueriesSlice;
