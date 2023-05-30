import React from "react";

import { useToolBarContext } from "~hooks/useToolBarContext";

import BaseButton from "../BaseButton/BaseButton";

import SC from "./ToolBox.style";

import type { FC } from "react";
import { IoClose } from "react-icons/io5";

const ToolBox: FC = () => {
  const { isToolBarOpen, closeToolBar } = useToolBarContext();

  return <SC.Wrapper>{isToolBarOpen ? <BaseButton onClick={closeToolBar} Icon={IoClose} /> : null}</SC.Wrapper>;
};

export default ToolBox;
