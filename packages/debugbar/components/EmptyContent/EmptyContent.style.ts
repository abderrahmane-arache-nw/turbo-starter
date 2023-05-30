import { fontSize, fontWeight, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  EmptyContentContainer: styled.div`
    text-align: center;
    padding-top: ${getSpacing(40)};
    margin: auto;
  `,
  EmptyContentHeadning: styled.h1`
    margin-bottom: ${getSpacing(16)};
    font-size: ${fontSize.text4xl};
    font-weight: ${fontWeight.bold};
  `,
  EmptyContentBody: styled.p`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.normal};
  `,
};

export default SC;
