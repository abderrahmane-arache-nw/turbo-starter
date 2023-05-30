import { useFrontLogsCollectors } from "../frontendLogs/api/useFrontLogsCollector";
import { useXHRNetworkCollector } from "../network/api/useXHRnetworkCollector";

import { useFetchNetworkCollector } from "./../network/api/useFetchNetworkCollector";

export const useCollectors = (): void => {
  useFetchNetworkCollector();
  useXHRNetworkCollector();
  useFrontLogsCollectors();
};
