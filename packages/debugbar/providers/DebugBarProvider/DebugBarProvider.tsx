import DebugBar from "~components/DebugBar/DebugBar";
import { useCollectors } from "~features/hooks/hooks";
import { useSocket } from "~features/hooks/useSocket";
import { StoreProvider } from "~store/provider";

import SC from "./DebugBarProvider.style";

import type { FC, PropsWithChildren } from "react";

const DebugBarProvider: FC<PropsWithChildren> = ({ children }) => {
  useCollectors();
  useSocket();

  return (
    <SC.Wrapper>
      <SC.ChildrenWrapper>{children}</SC.ChildrenWrapper>
      <StoreProvider>
        <DebugBar />
      </StoreProvider>
    </SC.Wrapper>
  );
};

export default DebugBarProvider;
