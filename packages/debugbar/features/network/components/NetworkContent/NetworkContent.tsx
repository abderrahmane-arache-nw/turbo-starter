import React, { useEffect, useRef } from "react";

import Accordion from "~components/Accordion/Accordion";
import AccordionContent from "~components/AccordionContent/AccordionContent";
import AccordionHeader from "~components/AccordionHeader/AccordionHeader";
import { useNetworkSelector } from "~store/network/selector";
import { toolbarHeights } from "~themes/colors";

import { getColorFromSeverity, parseNameFromUrl, severityMap } from "../../api/utils";

import SC from "./NetworkContent.style";

import type { FC } from "react";
import { TbWorldWww } from "react-icons/tb";

const NetworkContent: FC = () => {
  const networkLogs = useNetworkSelector();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [networkLogs]);
  return (
    <SC.Wrapper ref={listRef}>
      {networkLogs.map((networkLog, index) => (
        <SC.ContentListItem key={index}>
          <Accordion
            header={<AccordionHeader title={parseNameFromUrl(new URL(networkLog.name))} Icon={TbWorldWww} />}
            height={toolbarHeights.barWithPadding}
            color={getColorFromSeverity(networkLog.severity)}
          >
            <AccordionContent name={"URL"} value={networkLog.name} />
            <AccordionContent
              name={"Status"}
              value={`${networkLog.status}  ${severityMap.get(networkLog.severity) ?? ""}`}
            />
            <AccordionContent name={"Type"} value={networkLog.type} />
            <AccordionContent name={"Method"} value={networkLog.method} />
          </Accordion>
        </SC.ContentListItem>
      ))}
    </SC.Wrapper>
  );
};

export default NetworkContent;
