import { Row } from "~components/common/flexs/Row";
import { colors, fontFamily, fontSize, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

interface IActiveTabStyle {
  isSelected: boolean;
}
const SC = {
  Wrapper: styled(Row)<IActiveTabStyle>`
    background: ${(props) => props.isSelected && colors.biscay};
    align-items: center;
    height: 100%;
    cursor: pointer;

    border-radius: ${getSpacing(8)} ${getSpacing(8)} ${getSpacing(0)} ${getSpacing(0)};
    margin-left: ${getSpacing(5)};
    p {
      color: ${(props) => (props.isSelected ? colors.white : colors.gray)};
    }
  `,

  Label: styled.p`
    font-family: ${fontFamily.arial};
    font-size: ${fontSize.xSmall};
  `,
  Icon: styled.div`
    color: ${colors.white};
    margin-right: ${getSpacing(5)};
  `,
};

export default SC;
