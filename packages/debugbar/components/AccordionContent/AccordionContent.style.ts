import { colors, fontSize, fontWeight, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  ContentContainer: styled.div`
    border-bottom: 1px solid ${colors.golf};
    padding-top: ${getSpacing(9)};
  `,

  ContentHeader: styled.p`
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.semibold};
  `,
  TextContent: styled.p`
    font-size: ${fontSize.xs};
  `,
};

export default SC;
