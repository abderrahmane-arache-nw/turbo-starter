export interface ExceptionRecord {
  simpleName: string;
  message: string;
  stackTrace: string;
  packageName: string;
  requestID: string;
  fileName: string;
  className: string;
  methodName: string;
  line: number;
}
