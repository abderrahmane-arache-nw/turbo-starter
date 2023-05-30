import type { NetworkRecord } from "~features/network/api/types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface NetworkCollectorState {
  value: NetworkRecord[];
}

const initialState: NetworkCollectorState = {
  value: [],
};

const networkSlice = createSlice({
  name: "networkCollector",
  initialState,
  reducers: {
    appendNetworkRecord: (state, action: PayloadAction<NetworkRecord>) => {
      return {
        value: [...state.value, action.payload],
      };
    },
  },
});

export const { appendNetworkRecord } = networkSlice.actions;

export const { reducer: networkReducer } = networkSlice;
