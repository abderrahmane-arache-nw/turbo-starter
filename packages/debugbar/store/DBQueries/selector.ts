import type { DBQueriesRecord } from "~features/DBQueries/api/types";
import { useAppSelector } from "~store";

export const useDbQueriesSelector = (): Readonly<DBQueriesRecord[]> => useAppSelector((state) => state.dbQueries.value);
