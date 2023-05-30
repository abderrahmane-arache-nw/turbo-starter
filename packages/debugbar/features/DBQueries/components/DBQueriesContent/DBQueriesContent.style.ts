import { List } from "~components/common/flexs/List";
import { colors, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled(List)`
    padding-top: ${getSpacing(40)};
  `,
  ContentListItem: styled.li`
    padding: ${getSpacing(3)} ${getSpacing(6)};
    border-bottom: 1px solid ${colors.golf};
    position: relative;
    color: ${colors.black};
  `,
};

export default SC;
