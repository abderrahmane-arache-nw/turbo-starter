import React, { createContext } from "react";

import { useResizeDebugController } from "~hooks/useResizeDebugController";
import { toolbarHeights } from "~themes/colors";
import type { CallBack } from "~types/props";

import type { PropsWithChildren } from "react";

export interface IToolBarContextProps {
  isToolBarOpen: boolean;
  isResizing: boolean;
  openToolBar: CallBack;
  closeToolBar: CallBack;
  startResizing: CallBack;
  toolBarHeight: number;
}

const ToolBarContext = createContext<IToolBarContextProps>({
  isToolBarOpen: false,
  isResizing: false,
  closeToolBar: () => {
    throw new Error("No handling yet");
  },
  openToolBar: () => {
    throw new Error("No handling yet");
  },
  startResizing: () => {
    throw new Error("No handling yet");
  },
  toolBarHeight: toolbarHeights.closedBar,
});

export const ToolBarContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isToolBarOpen, openToolBar, closeToolBar, toolBarHeight, startResizing, isResizing } =
    useResizeDebugController();

  return (
    <ToolBarContext.Provider
      value={{
        startResizing,
        isResizing,
        isToolBarOpen,
        openToolBar,
        closeToolBar,
        toolBarHeight,
      }}
    >
      {children}
    </ToolBarContext.Provider>
  );
};
export default ToolBarContext;
