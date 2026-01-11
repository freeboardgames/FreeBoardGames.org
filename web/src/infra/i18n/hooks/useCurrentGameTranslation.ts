import { getGameCodeNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import { useTranslation } from './useTranslation';

export const useCurrentGameTranslation = () => {
  const { game, loading: gameLoading } = useCurrentGame();

  // Ensure we always have a valid namespace string - never null/undefined
  const namespace = game?.code ? getGameCodeNamespace(game.code) : 'common';

  // Use the ready flag to ensure translations are loaded
  const { t, ready: translationReady } = useTranslation(namespace, {
    useSuspense: false,
  });

  // Ready only when game context is loaded AND translations are ready
  const ready = !gameLoading && translationReady;

  return { translate: t, namespace, ready, gameLoading };
};
