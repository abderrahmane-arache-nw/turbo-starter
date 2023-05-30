import React from "react";

import Accordion from "~components/Accordion/Accordion";
import AccordionContent from "~components/AccordionContent/AccordionContent";
import AccordionHeader from "~components/AccordionHeader/AccordionHeader";
import EmptyContent from "~components/EmptyContent/EmptyContent";
import { useExceptionsSelector } from "~store/excpetions/selector";
import { colors, toolbarHeights } from "~themes/colors";

import type { ExceptionRecord } from "../../api/types";
import ExceptionStackTrace from "../ExceptionStackTrace/ExceptionStackTrace";

import SC from "./ExceptionsContent.style";

import type { FC } from "react";
import { VscRunErrors } from "react-icons/vsc";

const getSourceFromException = (exceptionRcord: ExceptionRecord) => {
  return `${exceptionRcord.className}::${exceptionRcord.methodName}, ${exceptionRcord.fileName}:${exceptionRcord.line}`;
};

const ExceptionsContent: FC = () => {
  const exceptionsLogs = useExceptionsSelector();

  return (
    <SC.ExceptionContentContainer>
      {exceptionsLogs.length === 0 ? (
        <EmptyContent
          heading="No Exceptions to show"
          bodyText="DebugBar not detecting any exceptions at this moment 🤠"
        />
      ) : (
        <SC.ExceptionContentList>
          {exceptionsLogs.map((exceptionLog, index) => (
            <SC.ContentListItem key={index}>
              <Accordion
                header={
                  <AccordionHeader
                    Icon={VscRunErrors}
                    subtitle={exceptionLog.packageName}
                    title={exceptionLog.simpleName}
                  />
                }
                height={toolbarHeights.barWithPadding}
                color={colors.red}
              >
                <AccordionContent name="Message" value={exceptionLog.message} />
                <AccordionContent name="Package" value={exceptionLog.packageName} />
                <AccordionContent name="Source" value={getSourceFromException(exceptionLog)} />
                <AccordionContent
                  name="Stack trace"
                  value={<ExceptionStackTrace stackTraceStr={exceptionLog.stackTrace} />}
                />
              </Accordion>
            </SC.ContentListItem>
          ))}
        </SC.ExceptionContentList>
      )}
    </SC.ExceptionContentContainer>
  );
};

export default ExceptionsContent;
