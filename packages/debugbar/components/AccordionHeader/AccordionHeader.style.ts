import { Row } from "~components/common/flexs/Row";
import { colors, fontSize, fontWeight, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled(Row)``,
  IconWrapper: styled.div`
    flex-shrink: 0;
    margin-right: ${getSpacing(20)};
    color: ${colors.burntSienna};
    font-size: ${fontSize.text2xl};
  `,
  Header: styled.div``,
  TitleParagraph: styled.p`
    font-size: ${fontSize.base};
    font-weight: ${fontWeight.medium};
    color: ${colors.belizeHole};
  `,

  SubTitleParagraph: styled.p`
    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.medium};
    color: ${colors.asbestos};
  `,
};

export default SC;
