import { useContext } from "react";

import type { IToolBarContextProps } from "~utils/ToolBarContext";
import ToolBarContext from "~utils/ToolBarContext";

export const useToolBarContext = (): IToolBarContextProps => {
  const { startResizing, isResizing, isToolBarOpen, closeToolBar, openToolBar, toolBarHeight } =
    useContext<IToolBarContextProps>(ToolBarContext);

  return { startResizing, isResizing, isToolBarOpen, closeToolBar, openToolBar, toolBarHeight };
};
