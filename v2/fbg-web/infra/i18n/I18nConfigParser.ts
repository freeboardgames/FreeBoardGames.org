import YAML from 'yaml';

export interface I18nConfig {
  [languageCode: string]: {
      name: string;
      playVerb: string;
  }
}

export const parseI18nConfig = function (i18nYaml: string): I18nConfig {
  return YAML.parse(i18nYaml); 
}
