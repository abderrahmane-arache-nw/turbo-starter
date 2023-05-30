import { Row } from "~components/common/flexs/Row";

import styled from "@emotion/styled";

const SC = {
  Wrapper: styled.div`
    display: flex;
    flex-grow: 1;
    cursor: pointer;
    height: 100%;
  `,
  MenuTabsRow: styled(Row)`
    align-items: center;
  `,
};

export default SC;
