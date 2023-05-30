import { store } from "~store/configure";
import { appendNetworkRecord } from "~store/network/slice";
import { colors } from "~themes/colors";

import type { NetworkRecord } from "./types";
import { Severity } from "./types";

export const severityMap = new Map<Severity, string>([
  [Severity.ERROR, "Error"],
  [Severity.FAILED, "Failed"],
  [Severity.SUCCESS, "Success"],
  [Severity.WARNING, "Warning"],
]);

export const severityFromStatus = (status: number): Severity => {
  if (status >= 400) return Severity.ERROR;
  if (status >= 300) return Severity.WARNING;
  if (status >= 200) return Severity.SUCCESS;
  return Severity.FAILED;
};

export const getColorFromSeverity = (severity: Severity): string => {
  switch (severity) {
    case Severity.SUCCESS:
      return colors.green;
    case Severity.WARNING:
      return colors.orange;
    default:
      return colors.red;
  }
};

export const parseNameFromUrl = (url: URL): string => {
  const strUrl = url.toString();
  const urlFragments = strUrl.split("/");
  const urlFragmentsLength = urlFragments.length;
  const lastData = urlFragments[urlFragmentsLength - 1];
  if (lastData !== undefined && lastData !== "") return lastData;
  return url.hostname;
};

export const addInterceptedNetworkRecord = (record: NetworkRecord): void => {
  store.dispatch(appendNetworkRecord(record));
};
