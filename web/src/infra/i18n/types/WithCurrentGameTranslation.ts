import { TFunction } from 'next-i18next';

export type WithCurrentGameTranslation = {
  forwardedRef?: unknown;
  translate: TFunction;
};
