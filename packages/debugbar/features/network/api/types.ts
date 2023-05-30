export enum Severity {
  ERROR = 0,
  FAILED = 1,
  SUCCESS = 2,
  WARNING = 3,
}

export interface NetworkRecord {
  name: string;
  status: number | string;
  type: string;
  size: string;
  method: string;
  severity: Severity;
}

export type NetworkType = "fetch" | "xhr";
