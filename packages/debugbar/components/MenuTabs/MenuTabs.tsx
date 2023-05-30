import React from "react";

import { DebugBarLogo } from "~assets/images/DebugBarLogo";
import { useMenuTabs } from "~components/MenuTabs/useMenuTabs";
import Tab from "~components/Tab/Tab";
import type { Tabs } from "~components/types";
import { useTabBarContext } from "~hooks/useTabBarContext";
import type { ITabData } from "~types/interface";
import type { CallBack } from "~types/props";

import SC from "./MenuTabs.style";

import type { FC } from "react";
interface IMenuTabsProps {
  toggle: CallBack;
}
const MenuTabs: FC<IMenuTabsProps> = ({ toggle }) => {
  const tabsRecord: Map<Tabs, ITabData> = useMenuTabs();
  const { selectedTab, handleSelectTab } = useTabBarContext();
  return (
    <SC.Wrapper
      onClick={() => {
        toggle();
      }}
    >
      <SC.MenuTabsRow>
        <>
          <DebugBarLogo />
          {Array.from(tabsRecord.entries()).map(([key, value], index) => (
            <Tab
              key={index}
              label={value.label}
              toggleToolBar={() => {
                handleSelectTab(key);
              }}
              isSelected={key === selectedTab}
              notificationCounter={value.notificationCounter}
              Icon={value.icon}
            />
          ))}
        </>
      </SC.MenuTabsRow>
    </SC.Wrapper>
  );
};

export default MenuTabs;
