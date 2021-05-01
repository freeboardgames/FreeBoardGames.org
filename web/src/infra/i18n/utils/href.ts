import { lngPathCorrector } from 'next-i18next/dist/commonjs/utils';
import { compile, match as matcher } from 'path-to-regexp';
import { LinkProps } from 'next/link';
import translatedPaths from '../translatedPaths';
import { nextI18Next } from '../config';

export const translateHref = (options: Options) => {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return options.href;

  const addPrefix = makeAddLanguagePrefix(options.language);
  const result = getPathTranslation(options.href);

  if (!result) return addPrefix(options.href);

  const { pathTranslation, parsedUrl } = result;
  const localizedRoute = pathTranslation.locales[options.language];

  if (!localizedRoute) return addPrefix(options.href);

  const toPath = compile(localizedRoute);
  const unprefixedHref = toPath(parsedUrl.params);

  return addPrefix(unprefixedHref);
};

function getPathTranslation(href: LinkProps['href']) {
  for (let i = 0; i < translatedPaths.length; i++) {
    const match = matcher<{ path: string }>(translatedPaths[i].original);
    const parsed = match(href.toString());
    if (!parsed) {
      continue;
    }
    return { pathTranslation: translatedPaths[i], parsedUrl: parsed };
  }
  return null;
}

function makeAddLanguagePrefix(language: Options['language']) {
  return (href: Options['href']) => {
    const path = lngPathCorrector(nextI18Next.config, { href }, language);
    return path.as;
  };
}

interface Options {
  href: LinkProps['href'];
  language: string;
}
