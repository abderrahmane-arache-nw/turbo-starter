import { toolbarHeights } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled.div`
    height: 100vh;
  `,

  ChildrenWrapper: styled.div`
    height: calc(100vh - ${toolbarHeights.closedBar}px);
    overflow-y: scroll;
  `,
};

export default SC;
