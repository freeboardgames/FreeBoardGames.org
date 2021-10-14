import { useToggleState } from 'infra/common/hooks/useToggleState';
import React, { FC, useEffect } from 'react';
import { createSafeContext } from 'react-safe-context';

interface NotificationsUiContext {
  muted: boolean;
  toggleMuted: () => void;
}

const Context = createSafeContext<NotificationsUiContext>('NotificationsUi');

export const withNotificationsUiProvider = (Component) => (props) => (
  <NotificationsUiProvider>
    <Component {...props} />
  </NotificationsUiProvider>
);

export const NotificationsUiProvider: FC = ({ children }) => {
  const [muted, toggleMuted] = useToggleState(false);

  useEffect(() => {
    staticContext.muted = muted;
  }, [muted]);

  return <Context.Provider value={{ muted, toggleMuted }}>{children}</Context.Provider>;
};

export const useNotificationsUiContext = Context.useValue;

export const staticContext = {
  muted: false,
  toggleMuted() {
    this.muted = !this.muted;
  },
};
