import type { ExceptionRecord } from "~features/exceptions/api/types";

import { useAppSelector } from "../hooks";

export const useExceptionsSelector = (): Readonly<ExceptionRecord[]> =>
  useAppSelector((state) => state.exceptions.value);
