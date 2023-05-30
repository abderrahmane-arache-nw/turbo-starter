import { toolbarHeights } from "~themes/colors";

import type { DynamicHeight } from "../types";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled.div<DynamicHeight>`
    height: ${(props) => `${props.height - toolbarHeights.barWithPadding}px`};
    display: block;
  `,
};

export default SC;
