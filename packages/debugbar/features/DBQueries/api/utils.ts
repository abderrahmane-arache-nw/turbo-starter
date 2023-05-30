import type { DBQueriesRecord } from "~features/DBQueries/api/types";
import { store } from "~store/configure";
import { appendDBQueriesRecord } from "~store/DBQueries/slice";
import type { IMessage } from "~node_modules/@stomp/stompjs/esm6";

export const appendCollectedDBQueries = (message: IMessage): void => {
  store.dispatch(appendDBQueriesRecord({ ...(JSON.parse(message.body) as DBQueriesRecord) }));
};
