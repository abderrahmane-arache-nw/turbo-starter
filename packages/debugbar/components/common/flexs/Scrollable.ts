import { colors, getSpacing } from "~themes/colors";

import styled from "@emotion/styled";

export const Scrollable = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
  --scrollbar-width: ${getSpacing(10)};
  --scrollbar-color: ${colors.alizarinCrimson} ${colors.biscay};
  scrollbar-gutter: ${getSpacing(5)};

  ::-webkit-scrollbar {
    width: ${getSpacing(8)};
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.biscay};
    border-radius: ${getSpacing(6)};
    border: 1px solid ${colors.white};
  }
`;
