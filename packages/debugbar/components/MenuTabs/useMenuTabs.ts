import { Tabs } from "~components/types";
import type { ITabData } from "~types/interface";

import { BsDatabase } from "react-icons/bs";
import { TbFileInfo, TbWorldWww } from "react-icons/tb";
import { VscRunErrors } from "react-icons/vsc";

export const useMenuTabs = (): Map<Tabs, ITabData> => {
  const tabsRecord: Map<Tabs, ITabData> = new Map<Tabs, ITabData>([
    [
      Tabs.Network,
      {
        label: "Network",
        icon: TbWorldWww,
        notificationCounter: 5,
        description: "Detailed information about the HTTP requests and responses.",
      },
    ],
    [
      Tabs.DbQueries,
      {
        label: "DataBase",
        icon: BsDatabase,
        notificationCounter: 0,
        description: "Insights into the interactions between your application and the database.",
      },
    ],
    [
      Tabs.Exceptions,
      {
        label: "Exceptions",
        icon: VscRunErrors,
        notificationCounter: 0,
        description: "Exceptions or errors that occur on the server side of your application.",
      },
    ],
    [
      Tabs.FrontLogs,
      {
        label: "Front logs",
        icon: TbFileInfo,
        notificationCounter: 0,
        description: "Exceptions or errors that occur on the server side of your application.",
      },
    ],
  ]);
  return tabsRecord;
};
