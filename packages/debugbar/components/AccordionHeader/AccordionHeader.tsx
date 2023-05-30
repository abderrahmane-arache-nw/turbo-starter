import React from "react";

import SC from "./AccordionHeader.style";

import type { FC } from "react";
import type { IconType } from "react-icons";
interface IAccordionHeaderProps {
  title: string;
  subtitle?: string;
  Icon?: IconType;
}
const AccordionHeader: FC<IAccordionHeaderProps> = ({ title, subtitle, Icon }) => {
  return (
    <SC.Wrapper>
      <SC.IconWrapper>{Icon !== undefined && <Icon />}</SC.IconWrapper>
      <SC.Header>
        <SC.TitleParagraph>{title}</SC.TitleParagraph>
        <SC.SubTitleParagraph>{subtitle}</SC.SubTitleParagraph>
      </SC.Header>
    </SC.Wrapper>
  );
};

export default AccordionHeader;
