import { loadI18nConfig } from "../infra/i18n/I18nConfigLoader";
import { I18nConfig, parseI18nConfig } from "../infra/i18n/I18nConfigParser";
import languages from "../public/locales/languages.json";
import Link from "next/link";

interface StaticProps {
  i18nConfig: I18nConfig;
}

function Index(props: StaticProps) {
  const i18nChoices = languages.map((lang) => (
    <li key={lang}>
      <Link href={`/${lang}`}>{props.i18nConfig[lang].name}</Link>
    </li>
  ));
  return (
    <>
      <h1>Select Language</h1>
      <ul>{i18nChoices}</ul>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  return { props: { i18nConfig: parseI18nConfig(await loadI18nConfig()) } };
}

export default Index;
