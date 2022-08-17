import YAML from "js-yaml";

export interface I18nConfig {
  [languageCode: string]: {
    name: string;
    playVerb: string;
    xGames: string;
  };
}

export const parseI18nConfig = function (i18nYaml: string): I18nConfig {
  return YAML.load(i18nYaml) as I18nConfig;
};
