import { List } from "~components/common/flexs/List";
import { colors, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled(List)`
    padding-top: ${getSpacing(40)};
  `,
  Divider: styled.div`
    border-bottom: 1px solid ${colors.golf} !important;
  `,
  LogWrapper: styled.div``,
};

export default SC;
