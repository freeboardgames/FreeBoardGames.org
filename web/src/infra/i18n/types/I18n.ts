import { WithTranslation as NextWithTranslation } from 'next-i18next';
import { Language } from './Language';

export type I18n = NextWithTranslation['i18n'] & { language: Language };
