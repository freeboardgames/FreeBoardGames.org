import { loadI18nConfig } from "../infra/i18n/I18nConfigLoader";
import { I18nConfig, parseI18nConfig } from "../infra/i18n/I18nConfigParser";
import languages from "../public/locales/languages.json";
import Link from "next/link";
import logo from "./fbg_logo_black_256.png";
import css from "./index.module.css";
import Typography from "@mui/material/Typography";
import gamesJson from "fbg-games/games.json";
import { loadGameYaml } from "../infra/games/GameLoader";
import {
  GameTranslationStatus,
  parseGameTranslations,
} from "infra/games/GameTranslationsParser";
import { FbgMetaButtons } from "../infra/widgets/FbgMetaButtons";

interface StaticProps {
  i18nConfig: I18nConfig;
  gameCountByLang: { [lang: string]: number };
}

function Index(props: StaticProps) {
  const i18nChoices = languages.map((lang) => (
    <div key={lang} className={css.langBox}>
      <Link href={`/${lang}`} legacyBehavior>
        <Typography component="h2" variant="h5">
          <a href="#" className={css.langLink}>
            {props.i18nConfig[lang].name}
          </a>
        </Typography>
      </Link>
      <Typography component="span" variant="subtitle1">
        {props.i18nConfig[lang].xGames.replace(
          "{{x}}",
          `${props.gameCountByLang[lang]}`
        )}
      </Typography>
    </div>
  ));
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img src={logo.src} className={css.logo} alt="FreeBoardGames"></img>
        <div className={css.langContainer}>{i18nChoices}</div>
        <FbgMetaButtons />
      </div>
    </div>
  );
}

async function getGameCountByLang(): Promise<{ [lang: string]: number }> {
  const result: { [lang: string]: number } = {};
  result["en"] = gamesJson.length;
  for (const gameId of gamesJson) {
    const gameYaml = await loadGameYaml(gameId);
    const translations = parseGameTranslations(gameYaml, gameId);
    for (const lang of Object.keys(translations)) {
      if (
        translations[lang] == GameTranslationStatus.PARTIAL ||
        translations[lang] == GameTranslationStatus.DONE
      ) {
        result[lang] = (result[lang] || 0) + 1;
      }
    }
  }
  return result;
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  const i18nConfig = parseI18nConfig(await loadI18nConfig());
  const gameCountByLang = await getGameCountByLang();
  return { props: { i18nConfig, gameCountByLang } };
}

export default Index;
