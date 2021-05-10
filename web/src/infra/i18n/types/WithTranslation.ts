import { WithTranslation as NextWithTranslation } from 'next-i18next';
import { I18n } from './I18n';

export type WithTranslation = NextWithTranslation & {
  i18n: I18n;
};
