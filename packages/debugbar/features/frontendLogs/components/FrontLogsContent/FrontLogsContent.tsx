import React from "react";

import Chip from "~components/Chip/Chip";
import EmptyContent from "~components/EmptyContent/EmptyContent";
import { useFrontLogsSelector } from "~store/frontLogs/selector";
import { colors } from "~themes/colors";

import { LogLevel } from "../../api/types";

import SC from "./FrontLogsContent.style";

import type { FC } from "react";
import type { IconType } from "react-icons";
import { HiBan, HiExclamation, HiInformationCircle } from "react-icons/hi";

interface ColorWithIcon {
  color: string;
  icon: IconType;
}

const getColorWithIcon = (logLevel: LogLevel): ColorWithIcon => {
  switch (logLevel) {
    case LogLevel.Error:
      return { color: colors.red, icon: HiBan };
    case LogLevel.Warn:
      return { color: colors.orange, icon: HiExclamation };
    default:
      return { color: colors.black, icon: HiInformationCircle };
  }
};

const FrontLogsContent: FC = () => {
  const frontLogsRecords = useFrontLogsSelector();

  return frontLogsRecords.length === 0 ? (
    <EmptyContent heading="No Logs to show" bodyText="DebugBar not detecting any logs at this moment 👾" />
  ) : (
    <SC.Wrapper>
      {frontLogsRecords.map((log, index) => {
        const colorWithIcon = getColorWithIcon(log.level);
        return (
          <SC.LogWrapper key={index}>
            <Chip
              key={index}
              label={log.message}
              color={colorWithIcon.color}
              Icon={colorWithIcon.icon}
              iconColor={colorWithIcon.color}
            />
            <SC.Divider />
          </SC.LogWrapper>
        );
      })}
    </SC.Wrapper>
  );
};

export default FrontLogsContent;
