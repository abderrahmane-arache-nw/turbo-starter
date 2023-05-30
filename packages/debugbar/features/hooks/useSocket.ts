import { useEffect } from "react";

import { DebugBarWebSocket } from "~websocket";

export const useSocket = (): void => {
  useEffect(() => {
    DebugBarWebSocket.getWebSocketClient();
  }, []);
};
