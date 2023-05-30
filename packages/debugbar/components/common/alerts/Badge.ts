import type { StyleColors } from "~themes/colors";
import { colors, fontFamily, fontSize, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

interface IBadgeStyle {
  background?: StyleColors;
  textColor?: StyleColors;
}
export const Badge = styled.div<IBadgeStyle>`
  color: ${(props) => props.textColor ?? colors.white};
  font-size: ${fontSize.xSmall};
  font-family: ${fontFamily.arial};
  background: ${(props) => props.background ?? colors.burntSienna};
  border-radius: 50%;
  padding: ${getSpacing(0)} ${getSpacing(5)};
  margin-left: ${getSpacing(10)};
`;
