import React, { useEffect, useRef } from "react";

import Accordion from "~components/Accordion/Accordion";
import AccordionContent from "~components/AccordionContent/AccordionContent";
import AccordionHeader from "~components/AccordionHeader/AccordionHeader";
import { useDbQueriesSelector } from "~store/DBQueries/selector";
import { toolbarHeights } from "~themes/colors";

import SC from "./DBQueriesContent.style";

import type { FC } from "react";
import { BsDatabase } from "react-icons/bs";

const DBQueriesContent: FC = () => {
  const dbQueriesLogs = useDbQueriesSelector();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [dbQueriesLogs]);

  return (
    <SC.Wrapper ref={listRef}>
      {dbQueriesLogs.map((dbQueryLog, index) => (
        <SC.ContentListItem key={index}>
          <Accordion
            header={<AccordionHeader title={dbQueryLog.methodName} Icon={BsDatabase} />}
            height={toolbarHeights.barWithPadding}
          >
            <AccordionContent name={"Sql"} value={dbQueryLog.sql} />
            <AccordionContent name={"Type"} value={dbQueryLog.type} />
            <AccordionContent name={"Operation"} value={dbQueryLog.operation} />
            <AccordionContent
              name={"Execution Duration (ms)"}
              value={`${(dbQueryLog.executionDuration / 1_000_000).toString()} ms`}
            />
          </Accordion>
        </SC.ContentListItem>
      ))}
    </SC.Wrapper>
  );
};

export default DBQueriesContent;
