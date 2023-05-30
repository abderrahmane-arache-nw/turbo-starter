import { colors, fontSize, getSpacing, toolbarHeights, zIndex } from "~themes/colors";

import { Row } from "../common/flexs/Row";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled.div``,
  UpperBar: styled(Row)`
    background: ${colors.downRiver};
    height: ${toolbarHeights.closedBar}px;
    align-items: center;
  `,
  LowerBar: styled(Row)`
    background: ${colors.gulfBlue};
    height: ${toolbarHeights.closedBar}px;
    align-items: center;
    padding: ${getSpacing(8)} ${getSpacing(8)};
    background: ${colors.biscay};
    color: ${colors.white};
    font-size: ${fontSize.small};
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: ${zIndex.high};
  `,
};

export default SC;
