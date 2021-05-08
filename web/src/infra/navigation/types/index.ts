import { Language } from 'infra/i18n/types/Language';

export interface LanguagePathResolver {
  (language: Language): string;
}
