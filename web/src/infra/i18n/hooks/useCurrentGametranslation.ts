import { getGameCodeNamespace } from 'infra/game';
import { useCurrentGame } from 'infra/game/GameProvider';
import { useTranslation } from './useTranslation';

export const useCurrentGameTranslation = () => {
  const { game } = useCurrentGame();
  const namespace = game?.code;
  const { t } = useTranslation(getGameCodeNamespace(namespace));
  return { translate: t };
};
