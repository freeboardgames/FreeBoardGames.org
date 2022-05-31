import YAML from 'yaml';

export enum GameTranslationStatus {
  PARTIAL,
  DONE,
}

export interface GameTranslations {
  [lang: string]: GameTranslationStatus
}

export const parseGameTranslations = function (gameYaml: string, id: string): GameTranslations {
  const gameDef = YAML.parse(gameYaml);
  const translations = gameDef.translations || {};
  const result = {} as GameTranslations;
  for (const lang of Object.keys(translations)) {
    const statusCode = translations[lang];
    if (statusCode === 'DONE') {
      result[lang] = GameTranslationStatus.DONE;
    } else if (statusCode === 'PARTIAL') {
      result[lang] = GameTranslationStatus.PARTIAL;
    } else {
      throw new Error(`Invalid status code for ${lang} on ${id}: ${statusCode}`);
    }
  }
  return result;
}
