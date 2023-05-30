import React from "react";

import Chip from "~components/Chip/Chip";

import SC from "./TabHeader.style";

import type { FC, PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import { BsInfoCircle } from "react-icons/bs";

interface ITabHeaderProps extends PropsWithChildren {
  description?: string | undefined;
  color?: string | undefined;
  Icon?: IconType | undefined;
}
const TabHeader: FC<ITabHeaderProps> = ({ color, description, Icon, children }) => {
  return (
    <SC.Wrapper>
      <Chip label={description} color={color} Icon={Icon === undefined ? BsInfoCircle : Icon} />
      <SC.Filters>{children}</SC.Filters>
    </SC.Wrapper>
  );
};

export default TabHeader;
