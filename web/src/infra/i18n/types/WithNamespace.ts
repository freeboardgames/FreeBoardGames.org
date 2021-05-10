import { TFunction } from 'next-i18next';

export type WithNamespace = {
  withNamespace: (namespace: string) => TFunction;
};
