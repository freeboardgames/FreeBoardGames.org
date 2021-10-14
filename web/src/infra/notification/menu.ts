import { IOptionsItems } from 'gamesShared/definitions/options';
import { useTranslation } from 'infra/i18n';
import { staticContext, useNotificationsUiContext } from './Provider';

export const useNotificationMenuItems = (): IOptionsItems[] => {
  const { muted, toggleMuted } = useNotificationsUiContext();
  const [t] = useTranslation('notifications');

  return [
    {
      text: muted ? t('unmute_session') : t('mute_session'),
      onClick: () => {
        toggleMuted();
        staticContext.toggleMuted();
      },
    },
  ];
};
