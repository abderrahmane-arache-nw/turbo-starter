import { colors, getSpacing } from "~themes/colors";

import { Row } from "../common/flexs/Row";

import styled from "@emotion/styled";

interface AccordionStyleProps {
  display?: string;
  heghit: number;
}

const SC = {
  AccordionContainer: styled.div``,

  AccordionHeader: styled(Row)`
    padding: ${getSpacing(3)} ${getSpacing(5)};
    cursor: pointer;
    width: 100%;
    border: none;
    outline: none;
    transition: 0.4s;
    &:hover {
      background-color: ${colors.citylOp};
    }
  `,

  AccordionBody: styled.div<AccordionStyleProps>`
    margin-left: ${getSpacing(40)};
    display: ${(props) => props.display ?? "none"};
    background-color: ${colors.white};
    overflow: hidden;
    padding: ${getSpacing(3)} ${getSpacing(6)};
    border-bottom: 1px solid ${colors.golf};
  `,
};

export default SC;
