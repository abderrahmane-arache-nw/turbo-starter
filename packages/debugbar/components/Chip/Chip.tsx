import React from "react";

import { colors } from "~themes/colors";

import SC from "./Chip.style";

import type { FC } from "react";
import type { IconType } from "react-icons";

interface ChipProps {
  Icon?: IconType | undefined;
  label?: string | undefined;
  color?: string | undefined;
  iconColor?: string | undefined;
}

const Chip: FC<ChipProps> = ({ Icon, label, color, iconColor }) => {
  return (
    <SC.ChipContainer>
      <SC.ChipIcon>{Icon !== undefined && <Icon color={iconColor ?? colors.black} />}</SC.ChipIcon>
      <SC.ChipText color={color}>{label !== undefined && label}</SC.ChipText>
    </SC.ChipContainer>
  );
};

export default Chip;
