export interface DBQueriesRecord {
  sql: string;
  type: string;
  operation: string;
  executionDuration: number;
  timeStamp: Date;
  methodName: string;
}
