import { appendCollectedDBQueries } from "~features/DBQueries/api/utils";
import { appendCollectedExceptions } from "~features/exceptions/api/utils";

import type { CompatClient, IMessage } from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";

interface WSChannelProperties {
  topic: string;
  handleEvent: (message: IMessage) => void;
}

/**
 * DebugBarWebSocket : is a singleton class to manage the WebSocket client
 */
export class DebugBarWebSocket {
  private static debugBarClient: DebugBarWebSocket | null = null;
  private client: CompatClient | null;
  private readonly baseUrl: string;
  private readonly wsUrl: string;
  private readonly channels: WSChannelProperties[];

  private constructor() {
    this.client = null;
    this.baseUrl = "ws://localhost:8080";
    this.wsUrl = "/api/debugBar";
    this.channels = [
      {
        topic: "/collectors/exceptions",
        handleEvent: (message: IMessage) => {
          appendCollectedExceptions(message);
        },
      },
      {
        topic: "/collectors/db-queries",
        handleEvent: (message: IMessage) => {
          appendCollectedDBQueries(message);
        },
      },
    ];

    this.connection();
  }

  public subscribe(): void {
    this.channels.forEach((channel) => {
      this.client?.subscribe(channel.topic, (message: IMessage) => {
        channel.handleEvent(message);
      });
    });
  }

  public connection(): void {
    const socket = new WebSocket(this.baseUrl + this.wsUrl);
    this.client = Stomp.over(socket);
    this.client.connect({}, () => {
      this.subscribe();
    });
  }

  public static getWebSocketClient = (): DebugBarWebSocket => {
    if (DebugBarWebSocket.debugBarClient === null) DebugBarWebSocket.debugBarClient = new DebugBarWebSocket();
    return DebugBarWebSocket.debugBarClient;
  };
}
