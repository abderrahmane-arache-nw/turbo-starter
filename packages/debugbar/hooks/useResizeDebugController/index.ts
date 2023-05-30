import { useCallback, useEffect, useState } from "react";

import { toolbarHeights } from "~themes/colors";
import type { IToolBarContextProps } from "~utils/ToolBarContext";

export const useResizeDebugController = (): IToolBarContextProps => {
  const closedBarHeight = toolbarHeights.closedBar;
  const openedBarHeight = toolbarHeights.openedBar;
  const [isToolBarOpen, setIsToolBarOpen] = useState<boolean>(false);
  const [toolBarHeight, setToolBarHeight] = useState<number>(closedBarHeight);
  const [isResizing, setIsResizing] = useState(false);

  const openToolBar = useCallback(() => {
    setToolBarHeight(openedBarHeight);
    setIsToolBarOpen((prev) => !prev);
  }, [openedBarHeight]);

  const closeToolBar = useCallback(() => {
    setToolBarHeight(closedBarHeight);
    setIsToolBarOpen((prev) => !prev);
  }, [closedBarHeight]);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: { clientY: number }) => {
      if (isResizing && isToolBarOpen) {
        const movementY = window.innerHeight - toolBarHeight - mouseMoveEvent.clientY;
        const newValue = toolBarHeight + movementY;
        if (newValue > toolbarHeights.closedBar && newValue < window.innerHeight) {
          setToolBarHeight(newValue);
        } else if (newValue < toolbarHeights.closedBar) {
          setIsToolBarOpen(false);
          setToolBarHeight(toolbarHeights.closedBar);
        }
      }
    },
    [toolBarHeight, isResizing, isToolBarOpen],
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return {
    isToolBarOpen,
    isResizing,
    toolBarHeight,
    openToolBar,
    closeToolBar,
    startResizing,
  };
};
