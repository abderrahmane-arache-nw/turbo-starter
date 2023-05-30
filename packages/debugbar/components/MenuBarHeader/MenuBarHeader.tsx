import React, { useEffect, useState } from "react";

import { useMenuTabs } from "~components/MenuTabs/useMenuTabs";
import TabHeader from "~components/TabHeader/TabHeader";
import type { Tabs } from "~components/types";
import { useTabBarContext } from "~hooks/useTabBarContext";
import { useToolBarContext } from "~hooks/useToolBarContext";
import { colors } from "~themes/colors";
import type { ITabData } from "~types/interface";

import MenuTabs from "../MenuTabs/MenuTabs";
import ToolBox from "../ToolBox/ToolBox";

import SC from "./MenuBarHeader.style";

import type { FC } from "react";
const MenuBarHeader: FC = () => {
  const { openToolBar, isToolBarOpen } = useToolBarContext();
  const toggleToolBar = () => {
    if (!isToolBarOpen) openToolBar();
  };

  const { selectedTab } = useTabBarContext();
  const tabsRecord: Map<Tabs, ITabData> = useMenuTabs();
  const [headerInfo, setHeaderInfo] = useState<ITabData | undefined>(undefined);
  useEffect(() => {
    setHeaderInfo(tabsRecord.get(selectedTab));
  }, [selectedTab]);

  return (
    <SC.Wrapper>
      <SC.UpperBar>
        <MenuTabs toggle={toggleToolBar} />
        <ToolBox />
      </SC.UpperBar>
      <SC.LowerBar>
        {headerInfo !== undefined && <TabHeader description={headerInfo.description} color={colors.white}></TabHeader>}
      </SC.LowerBar>
    </SC.Wrapper>
  );
};

export default MenuBarHeader;
