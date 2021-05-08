import { nextI18Next } from '../config';

type WithNamespace = (ns: string) => (key: string, fallback: string) => string;

export const useWithNamespace = (): WithNamespace => {
  const { t } = nextI18Next.useTranslation();
  return (namespace: string) => (key, fallback) => {
    // @ts-ignore
    return t(key, fallback, { ns: namespace });
  };
};

export const useTranslation = nextI18Next.useTranslation;
