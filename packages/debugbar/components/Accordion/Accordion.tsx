import React, { useState } from "react";

import Chip from "../Chip/Chip";

import SC from "./Accordion.style";

import type { FC, PropsWithChildren, ReactElement } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

interface AccordionProps extends PropsWithChildren {
  header: ReactElement | string;
  height: number;
  color?: string;
}

const accordion = {
  collapse: "none",
  expand: "block",
};

const Accordion: FC<AccordionProps> = ({ children, height, color, header }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setOpen((oldOpen) => !oldOpen);
  };
  return (
    <SC.AccordionContainer>
      <SC.AccordionHeader onClick={toggleAccordion}>
        {typeof header === "string" ? <Chip color={color} Icon={open ? HiMinus : HiPlus} label={header} /> : header}
      </SC.AccordionHeader>
      <SC.AccordionBody display={open ? accordion.expand : accordion.collapse} heghit={height}>
        {children}
      </SC.AccordionBody>
    </SC.AccordionContainer>
  );
};

export default Accordion;
