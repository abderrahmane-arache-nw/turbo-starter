import React from "react";

import Accordion from "~components/Accordion/Accordion";
import { colors, toolbarHeights } from "~themes/colors";

import SC from "./ExceptionStackTrace.style";

import type { FC } from "react";

interface ExceptionStackTraceProps {
  rootCause: string;
  trace: string[];
}

const processStackTrace = (stackTraceStr: string): ExceptionStackTraceProps | null => {
  const stackTraceArray: string[] = stackTraceStr.split(",");

  if (stackTraceArray.length !== 0) {
    const rootCause: string | undefined = stackTraceArray.shift();
    const trace: string[] = stackTraceArray;
    return {
      rootCause: rootCause ?? "",
      trace,
    };
  }

  return null;
};

const ExceptionStackTrace: FC<{ stackTraceStr: string }> = ({ stackTraceStr }) => {
  const stackTraceArray = processStackTrace(stackTraceStr);

  return (
    <SC.Wrapper>
      {stackTraceArray === null ? null : (
        <Accordion header={stackTraceArray.rootCause} height={toolbarHeights.barWithPadding} color={colors.red}>
          {stackTraceArray.trace.map((traceLog, index) => (
            <SC.Paragraph key={index}>{traceLog}</SC.Paragraph>
          ))}
        </Accordion>
      )}
    </SC.Wrapper>
  );
};

export default ExceptionStackTrace;
