import React, { createContext, useState } from "react";

import { Tabs } from "~components/types";
import type { Consumer } from "~types/props";

import type { PropsWithChildren } from "react";

export interface ITabContextProps {
  handleSelectTab: Consumer<Tabs>;
  selectedTab: Tabs;
}
const TabContext = createContext<ITabContextProps>({
  selectedTab: Tabs.Network,
  handleSelectTab: (_tab: Tabs) => {
    throw new Error("No handling yet");
  },
});

export const TabContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedTab, handleSelectTab] = useState(Tabs.Network);

  return <TabContext.Provider value={{ selectedTab, handleSelectTab }}>{children}</TabContext.Provider>;
};

export default TabContext;
