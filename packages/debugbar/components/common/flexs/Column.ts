import { getSpacing } from "~themes/colors";

import type { AlignItemsProperties, JustifyContentProperties } from "../types";

import styled from "@emotion/styled";

interface ColumnProps {
  justify?: JustifyContentProperties;
  alignItems?: AlignItemsProperties;
  rowGap?: number;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify ?? "flex-start"};
  align-items: ${(props) => props.alignItems ?? "flex-start"};
  row-gap: ${(props) => (props.rowGap === undefined ? "normal" : String(getSpacing(props.rowGap)))};
`;
