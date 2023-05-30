/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable max-params */

import { useEffect } from "react";

import type { NetworkRecord } from "./types";
import { Severity } from "./types";
import { addInterceptedNetworkRecord, severityFromStatus } from "./utils";
// TODO: manage request time

const TYPE = "xhr";

export const useXHRNetworkCollector = (): void => {
  useEffect(() => {
    const { send: oldSendMethod, open: oldOpenMethod } = XMLHttpRequest.prototype;
    let record: NetworkRecord;
    XMLHttpRequest.prototype.open = function open(
      method: string,
      url: URL | string,
      async?: boolean,
      username?: string | null,
      password?: string | null,
    ): void {
      record = {
        ...record,
        name: url.toString(),
        method,
      };
      oldOpenMethod.apply(this, [method, url, async ?? true, username, password]);
    };
    XMLHttpRequest.prototype.send = function send(body?: Document | XMLHttpRequestBodyInit | null | undefined): void {
      const onRequestLoaded = (processEvent: ProgressEvent<XMLHttpRequestEventTarget>): void => {
        // TODO: for errors you can delegate work to other methods to if modifying the property, ...
        const severity = severityFromStatus(this.status);
        record = {
          ...record,
          status: severity === Severity.FAILED ? "ERR" : this.status,
          size: `${processEvent.loaded / 1000} KB`,
          type: TYPE,
          severity,
        };

        addInterceptedNetworkRecord(record);
      };
      this.addEventListener("loadend", onRequestLoaded);
      oldSendMethod.apply(this, [body]);
    };
    return () => {
      XMLHttpRequest.prototype.open = oldOpenMethod;
      XMLHttpRequest.prototype.send = oldSendMethod;
    };
  }, []);
};
