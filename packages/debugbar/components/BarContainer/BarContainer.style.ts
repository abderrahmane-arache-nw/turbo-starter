import { colors, getSpacing, zIndex } from "~themes/colors";

import styled from "@emotion/styled";

interface IBarContainerState {
  isOpen: boolean;
  height: number;
}

interface IResizeController {
  isOpen: boolean;
  isResizing: boolean;
}

const SC = {
  Wrapper: styled.div<IBarContainerState>`
    height: ${(props) => `${props.height}px`};
    position: ${(props) => (props.isOpen ? "absolute" : "fixed")};
    transition: ${(props) => (props.isOpen ? "" : "height 0.2s ease-in-out")};
    bottom: 0;
    background-color: ${colors.gray};
    z-index: ${zIndex.high};
    width: 100%;
    user-select: none;
  `,
  ResizeController: styled.div<IResizeController>`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    height: ${getSpacing(5)};
    cursor: n-resize;
    position: relative;
    background: ${colors.downRiver};
  `,
};

export default SC;
