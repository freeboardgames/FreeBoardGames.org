import { compile, match as matcher } from 'path-to-regexp';
import { LinkProps } from 'next/link';
import { TranslatedPath } from '../translatedPaths';

export const translateHref = (options: {
  href: LinkProps['href'];
  language: string;
  translatedPaths: TranslatedPath[];
}) => {
  const result = getPathTranslation(options);

  if (!result) {
    return options.href;
  }

  const { pathTranslation, parsedUrl } = result;
  const localizedRoute = pathTranslation.locales[options.language];

  if (!localizedRoute) {
    return options.href;
  }

  const toPath = compile(localizedRoute);
  return toPath(parsedUrl.params);
};

function getPathTranslation(options: { href: LinkProps['href']; translatedPaths: TranslatedPath[] }) {
  for (let i = 0; i < options.translatedPaths.length; i++) {
    const match = matcher<{ path: string }>(options.translatedPaths[i].original);
    const parsed = match(options.href.toString());
    if (!parsed) {
      continue;
    }
    return { pathTranslation: options.translatedPaths[i], parsedUrl: parsed };
  }
  return null;
}
