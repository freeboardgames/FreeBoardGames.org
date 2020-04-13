import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import MobileDetect from 'mobile-detect';

interface DesktopMobileViewProps {
  children: React.ReactNode;
  thresholdWidth?: number;
  userAgent?: any;
}

const DEFAULT_THRESHOLD_WIDTH = 550;

function isMobile(props: DesktopMobileViewProps) {
  const hasJssSSRStyles = typeof document !== 'undefined' && !!document?.querySelector('#jss-server-side');
  let width = useWindowDimensions().width;
  const isBrowser = typeof window !== 'undefined';
  let isMobileResult: boolean;
  if ((!isBrowser || hasJssSSRStyles) && props.userAgent) {
    // keep the isDesktop() return uniform if JSS styles exist
    const md = new MobileDetect(props.userAgent);
    isMobileResult = !!md.mobile() && !md.tablet();
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
