import { TFunction } from 'next-i18next';

export type WithNamespace = {
  withGameNamespace: (namespace: string) => TFunction;
};
