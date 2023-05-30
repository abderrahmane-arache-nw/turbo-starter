import React from "react";

import ContentBar from "~components/ContentBar/ContentBar";
import { TabContextProvider } from "~utils/TabContext";
import { ToolBarContextProvider } from "~utils/ToolBarContext";

import BarContainer from "../BarContainer/BarContainer";
import MenuBarHeader from "../MenuBarHeader/MenuBarHeader";

import SC from "./DebugBar.style";

import type { FC } from "react";

const DebugBar: FC = () => {
  return (
    <SC.Wrapper>
      <ToolBarContextProvider>
        <BarContainer>
          <TabContextProvider>
            <MenuBarHeader />
            <ContentBar />
          </TabContextProvider>
        </BarContainer>
      </ToolBarContextProvider>
    </SC.Wrapper>
  );
};

export default DebugBar;
