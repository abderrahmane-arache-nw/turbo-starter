import { List } from "~/debugbar/components/common/flexs/List";
import { colors, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

interface CustomColor {
  color?: string;
}
const SC = {
  Wrapper: styled(List)`
    padding-top: ${getSpacing(40)};
  `,
  ContentListItem: styled.li<CustomColor>`
    padding: ${getSpacing(3)} ${getSpacing(6)};
    border-bottom: 1px solid ${colors.golf};
    position: relative;
    color: ${(props) => props.color};
  `,
  Paragraph: styled.p``,
};

export default SC;
