import React from "react";

import DebugBarContent from "~components/DebugBarContent/DebugBarContent";
import { useToolBarContext } from "~hooks/useToolBarContext";

import SC from "./ContentBar.style";

import type { FC } from "react";

const ContentBar: FC = () => {
  const { toolBarHeight } = useToolBarContext();

  return (
    <SC.Wrapper height={toolBarHeight}>
      <DebugBarContent />
    </SC.Wrapper>
  );
};

export default ContentBar;
