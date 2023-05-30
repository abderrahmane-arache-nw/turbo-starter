import React from "react";

import { Badge } from "~components/common/alerts/Badge";
import type { CallBack } from "~types/props";

import SC from "./Tab.style";

import type { FC } from "react";
import type { IconType } from "react-icons";

interface ITabProps {
  label: string;
  notificationCounter: number;
  toggleToolBar: CallBack;
  isSelected: boolean;
  Icon?: IconType | undefined;
}
const Tab: FC<ITabProps> = ({ Icon, label, notificationCounter, toggleToolBar, isSelected }) => {
  return (
    <SC.Wrapper onClick={toggleToolBar} isSelected={isSelected}>
      <SC.Icon>{Icon !== undefined && <Icon />}</SC.Icon>
      <SC.Label>{label}</SC.Label>
      {notificationCounter !== 0 && <Badge>{notificationCounter}</Badge>}
    </SC.Wrapper>
  );
};

export default Tab;
