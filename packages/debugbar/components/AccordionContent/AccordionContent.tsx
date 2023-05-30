import React from "react";

import SC from "./AccordionContent.style";

import type { FC, ReactElement } from "react";
interface IAccordionContent {
  name: string;
  value: ReactElement | string;
}
const AccordionContent: FC<IAccordionContent> = ({ name, value }) => {
  return (
    <SC.ContentContainer>
      <SC.ContentHeader>{name}</SC.ContentHeader>
      {typeof value === "string" ? <SC.TextContent>{value}</SC.TextContent> : value}
    </SC.ContentContainer>
  );
};

export default AccordionContent;
