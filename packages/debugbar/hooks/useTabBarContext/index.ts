import { useContext } from "react";

import type { ITabContextProps } from "~utils/TabContext";
import TabContext from "~utils/TabContext";

export const useTabBarContext = (): ITabContextProps => {
  const { selectedTab, handleSelectTab } = useContext(TabContext);
  return { selectedTab, handleSelectTab };
};
