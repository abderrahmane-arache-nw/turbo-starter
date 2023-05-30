import { useEffect } from "react";

import type { NetworkRecord, NetworkType } from "./types";
import { addInterceptedNetworkRecord, severityFromStatus } from "./utils";

const TYPE: NetworkType = "fetch";

export const useFetchNetworkCollector = (): void => {
  useEffect(() => {
    const original = window.fetch;
    window.fetch = async (url, options) => {
      const response = await original(url, options);
      const responseClone = response.clone();
      const blob = await responseClone.blob();
      const { size } = blob;
      const severity = severityFromStatus(response.status);
      const fetchNetworkProps: NetworkRecord = {
        name: response.url,
        status: response.status,
        size: `${size} B`,
        method: options?.method ?? "GET",
        type: TYPE,
        severity,
      };
      addInterceptedNetworkRecord(fetchNetworkProps);
      return response;
    };
    return () => {
      window.fetch = original;
    };
  }, []);
};
