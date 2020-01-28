import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';

interface DesktopMobileViewProps {
  children: React.ReactNode;
  thresholdWidth?: number;
}

const DEFAULT_THRESHOLD_WIDTH = 550;

function isDesktop(thresholdWidth?: number) {
  if (!process.browser) {
    return true;
  }
  thresholdWidth = thresholdWidth || DEFAULT_THRESHOLD_WIDTH;
  const { width } = useWindowDimensions();
  return width >= thresholdWidth;
}

export const DesktopView = (props: DesktopMobileViewProps) => {
  if (isDesktop(props.thresholdWidth)) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return null;
  }
};

export const MobileView = (props: DesktopMobileViewProps) => {
  if (!isDesktop(props.thresholdWidth)) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return null;
  }
};
