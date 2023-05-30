import { colors, fontSize, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

interface ChipTextProps {
  color?: string | undefined;
}
const SC = {
  ChipContainer: styled.div`
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  `,
  ChipIcon: styled.div`
    font-size: ${fontSize.small};
  `,
  ChipText: styled.span<ChipTextProps>`
    padding-left: ${getSpacing(4)};
    color: ${(props) => props.color ?? colors.black};
    font-size: ${fontSize.small};
  `,
};

export default SC;
