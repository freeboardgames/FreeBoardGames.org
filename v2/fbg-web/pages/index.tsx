import { loadI18nConfig } from "../infra/i18n/I18nConfigLoader";
import { I18nConfig, parseI18nConfig } from "../infra/i18n/I18nConfigParser";
import languages from "../public/locales/languages.json";
import Link from "next/link";
import logo from "./fbg_logo_black_256.png";
import css from "./index.module.css";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import SubjectIcon from "@mui/icons-material/Subject";
import InfoIcon from "@mui/icons-material/Info";

interface StaticProps {
  i18nConfig: I18nConfig;
}

function Index(props: StaticProps) {
  const i18nChoices = languages.map((lang) => (
    <div key={lang} className={css.langBox}>
      <Link href={`/${lang}`}>
        <Typography component="h2" variant="h5">
          <a href="#" className={css.langLink}>
            {props.i18nConfig[lang].name}
          </a>
        </Typography>
      </Link>
      <Typography component="span" variant="subtitle1">
        10 games
      </Typography>
    </div>
  ));
  const buttons = [
    <a
      href="https://github.com/freeboardgames/FreeBoardGames.org"
      target="_blank"
      title="Code"
      key="code"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <GitHubIcon />
      </IconButton>
    </a>,
    <a
      href="https://discord.gg/AaE6n3n"
      target="_blank"
      title="Commmunity"
      key="community"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <ForumIcon />
      </IconButton>
    </a>,
    <a
      href="https://www.freeboardgames.org/docs"
      target="_blank"
      title="Documentation"
      key="documentation"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <SubjectIcon />
      </IconButton>
    </a>,
    <Link href="/en/about" key="about">
      <a href="#" title="About">
        <IconButton className={css.button}>
          <InfoIcon />
        </IconButton>
      </a>
    </Link>,
  ];
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img src={logo.src} className={css.logo} alt="FreeBoardGames"></img>
        <div className={css.langContainer}>{i18nChoices}</div>
        <div className={css.buttonsContainer}>{buttons}</div>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  return { props: { i18nConfig: parseI18nConfig(await loadI18nConfig()) } };
}

export default Index;
