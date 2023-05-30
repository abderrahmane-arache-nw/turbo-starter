import React from "react";

import { useToolBarContext } from "~hooks/useToolBarContext";

import SC from "./BarContainer.style";

import type { FC, PropsWithChildren } from "react";

const BarContainer: FC<PropsWithChildren> = ({ children }) => {
  const { isToolBarOpen, isResizing, startResizing, toolBarHeight } = useToolBarContext();
  return (
    <SC.Wrapper isOpen={isToolBarOpen} height={toolBarHeight}>
      <SC.ResizeController
        onMouseDown={startResizing}
        isOpen={isToolBarOpen}
        isResizing={isResizing}
      ></SC.ResizeController>
      {children}
    </SC.Wrapper>
  );
};

export default BarContainer;
