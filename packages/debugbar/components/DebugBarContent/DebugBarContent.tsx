import React from "react";

import { Tabs } from "~components/types";
import DBQueriesContent from "~features/DBQueries/components/DBQueriesContent/DBQueriesContent";
import ExceptionsContent from "~features/exceptions/components/ExceptionsContent/ExceptionsContent";
import FrontLogsContent from "~features/frontendLogs/components/FrontLogsContent/FrontLogsContent";
import NetworkContent from "~features/network/components/NetworkContent/NetworkContent";
import { useTabBarContext } from "~hooks/useTabBarContext";

import SC from "./DebugBarContent.style";

import type { FC } from "react";

const DebugBarContent: FC = () => {
  const { selectedTab } = useTabBarContext();
  const getContentBySelectedTab = () => {
    switch (selectedTab) {
      case Tabs.Network:
        return <NetworkContent />;
      case Tabs.DbQueries:
        return <DBQueriesContent />;
      case Tabs.Exceptions:
        return <ExceptionsContent />;
      case Tabs.FrontLogs:
        return <FrontLogsContent />;
      default:
        return <NetworkContent />;
    }
  };
  return <SC.ContentContainer>{getContentBySelectedTab()}</SC.ContentContainer>;
};

export default DebugBarContent;
