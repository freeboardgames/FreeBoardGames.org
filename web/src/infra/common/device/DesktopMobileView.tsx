import React from 'react';
import css from './DesktopMobileView.module.css';

interface DesktopMobileViewProps {
  children: React.ReactNode;
}

export const DesktopView = (props: DesktopMobileViewProps) => <div className={css.DesktopView}>{props.children}</div>;

export const MobileView = (props: DesktopMobileViewProps) => <div className={css.MobileView}>{props.children}</div>;
