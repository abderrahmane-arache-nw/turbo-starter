import type { NetworkRecord } from "~features/network/api/types";

import { useAppSelector } from "../hooks";

export const useNetworkSelector = (): Readonly<NetworkRecord[]> => useAppSelector((state) => state.network.value);
