import { Language } from 'infra/i18n/types';

export interface LanguagePathResolver {
  (language: Language): string;
}
