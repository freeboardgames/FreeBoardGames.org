import { getGameCodeNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import { useTranslation } from './useTranslation';

export const useCurrentGameTranslation = () => {
  const { game } = useCurrentGame();
  const namespace = game?.code && getGameCodeNamespace(game?.code);
  const { t } = useTranslation(namespace);
  return { translate: t, namespace };
};
