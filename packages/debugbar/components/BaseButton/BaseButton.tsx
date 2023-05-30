import React from "react";

import type { CallBack } from "~types/props";

import SC from "./BaseButton.style";

import type { FC } from "react";
import type { IconType } from "react-icons";

export interface BaseButtonProps {
  onClick: CallBack;
  textKey?: string;
  Icon?: IconType;
}

const BaseButton: FC<BaseButtonProps> = ({ Icon, textKey, onClick }) => {
  return (
    <SC.Wrapper onClick={onClick}>
      {textKey !== undefined && textKey}
      {Icon !== undefined && <Icon />}
    </SC.Wrapper>
  );
};

export default BaseButton;
