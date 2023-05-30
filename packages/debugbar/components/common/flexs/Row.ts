import type { AlignItemsProperties, JustifyContentProperties } from "~components/common/types";
import { getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

interface RowFlexProps {
  alignItems?: AlignItemsProperties;
  justify?: JustifyContentProperties;
  columnGap?: number;
}
export const Row = styled.div<RowFlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify ?? "flex-start"};
  align-items: ${(props) => props.alignItems ?? "flex-start"};
  column-gap: ${(props) => (props.columnGap === undefined ? "normal" : String(getSpacing(props.columnGap)))};
  padding-right: 14px;
  padding-left: 14px;
`;
