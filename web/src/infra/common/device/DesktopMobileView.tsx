import React, { useContext } from 'react';
import useWindowDimensions from 'infra/common/hooks/useWindowDimensions';
import UaContext from 'infra/common/device/IsMobileContext';

interface DesktopMobileViewProps {
  children: React.ReactNode;
  thresholdWidth?: number;
}

const DEFAULT_THRESHOLD_WIDTH = 550;

function isMobile(props: DesktopMobileViewProps) {
  let width = useWindowDimensions().width;
  const hasJssSSRStyles = typeof document !== 'undefined' && !!document?.querySelector('#jss-server-side');

  let isMobileResult: boolean;
  const isBrowser = typeof window !== 'undefined';
  const isMobileFromUA = useContext(UaContext);

  if (!isBrowser || hasJssSSRStyles) {
    isMobileResult = isMobileFromUA;
  } else {
    const thresholdWidth = props.thresholdWidth || DEFAULT_THRESHOLD_WIDTH;
    isMobileResult = width <= thresholdWidth;
  }
  return isMobileResult;
}

export const DesktopView = (props: DesktopMobileViewProps) => {
  if (!isMobile(props)) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return null;
  }
};

export const MobileView = (props: DesktopMobileViewProps) => {
  if (isMobile(props)) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return null;
  }
};
