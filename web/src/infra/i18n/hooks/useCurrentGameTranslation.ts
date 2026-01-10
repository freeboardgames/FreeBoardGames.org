import { getGameCodeNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import { useTranslation } from './useTranslation';

export const useCurrentGameTranslation = () => {
  const { game } = useCurrentGame();

  // Ensure we always have a valid namespace string - never null/undefined
  const namespace = game?.code ? getGameCodeNamespace(game.code) : 'common';

  // Use the ready flag to ensure translations are loaded
  const { t, ready } = useTranslation(namespace, {
    useSuspense: false,
  });

  return { translate: t, namespace, ready };
};
