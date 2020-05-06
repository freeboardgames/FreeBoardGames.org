import React, { useContext } from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import UaContext from 'misc/UaContext';

interface DesktopMobileViewProps {
  children: React.ReactNode;
  thresholdWidth?: number;
  userAgent?: any;
}

const DEFAULT_THRESHOLD_WIDTH = 550;

function isMobile(props: DesktopMobileViewProps) {
  let width = useWindowDimensions().width;
  const hasJssSSRStyles = typeof document !== 'undefined' && !!document?.querySelector('#jss-server-side');

  let isMobileResult: boolean;
  const isBrowser = typeof window !== 'undefined';
  const userAgentDetails = useContext(UaContext);
  const isMobile = userAgentDetails?.isMobile;

  if ((!isBrowser || hasJssSSRStyles) && typeof isMobile !== 'undefined') {
    isMobileResult = userAgentDetails.isMobile;
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
