import YAML from "js-yaml";

export interface GameSummary {
  id: string;
  code: string;
  lang: string;
  name: string;
  callout: string;
}

export const parseGameSummary = function (
  gameYaml: string,
  lang: string,
  id: string
): GameSummary {
  const gameDef = YAML.load(gameYaml) as any;
  const localizedGameDef = gameDef[lang];
  return {
    id,
    code: localizedGameDef.code,
    name: localizedGameDef.name,
    callout: localizedGameDef.callout,
    lang
  };
};