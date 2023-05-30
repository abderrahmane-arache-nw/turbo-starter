import React from "react";

import SC from "./EmptyContent.style";

import type { FC } from "react";

interface EmptyContentProps {
  heading: string;
  bodyText: string;
}
const EmptyContent: FC<EmptyContentProps> = ({ heading, bodyText }) => {
  return (
    <SC.EmptyContentContainer>
      <SC.EmptyContentHeadning>{heading}</SC.EmptyContentHeadning>
      <SC.EmptyContentBody>{bodyText}</SC.EmptyContentBody>
    </SC.EmptyContentContainer>
  );
};

export default EmptyContent;
