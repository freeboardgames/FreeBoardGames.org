import { getGamesNamespace } from 'infra/game';
import { nextI18Next } from '../config';

type WithNamespace = (ns: string) => (key: string, fallback: string) => string;

export const useWithGameNamespace = (): WithNamespace => {
  const { t } = nextI18Next.useTranslation();
  return (namespace: string) => (key, fallback) => {
    // @ts-ignore
    return t(key, fallback, { ns: getGamesNamespace(namespace) });
  };
};

export const useTranslation = nextI18Next.useTranslation;
