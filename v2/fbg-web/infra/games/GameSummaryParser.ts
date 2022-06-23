import YAML from "yaml";

export interface GameSummary {
  id: string;
  code: string;
  name: string;
  callout: string;
}

export const parseGameSummary = function (
  gameYaml: string,
  lang: string,
  id: string
): GameSummary {
  const gameDef = YAML.parse(gameYaml);
  const localizedGameDef = gameDef[lang];
  return {
    id,
    code: localizedGameDef.code,
    name: localizedGameDef.name,
    callout: localizedGameDef.callout,
  };
};
