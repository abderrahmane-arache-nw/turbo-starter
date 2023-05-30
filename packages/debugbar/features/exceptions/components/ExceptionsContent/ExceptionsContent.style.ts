import { List } from "~components/common/flexs/List";
import { colors, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  ExceptionContentContainer: styled.div`
    padding-top: ${getSpacing(40)};
  `,
  ExceptionContentList: styled(List)``,
  ContentListItem: styled.li<{ color?: string }>`
    margin: ${getSpacing(3)} ${getSpacing(6)};
    border-bottom: 1px solid ${colors.golf};
    position: relative;
    color: ${(props) => props.color};
  `,
};

export default SC;
