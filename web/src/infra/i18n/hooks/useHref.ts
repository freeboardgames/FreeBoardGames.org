import { LinkProps } from 'next/link';
import { match as matcher, compile } from 'path-to-regexp';
import routing from 'infra/i18n/translatedPaths';
import { nextI18Next } from 'infra/i18n';

export function useHref(href: LinkProps['href']): LinkProps['href'] {
  console.log(typeof process.env.NEXT_PUBLIC_I18N_ENABLED, process.env.NEXT_PUBLIC_I18N_ENABLED);

  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return href;

  const { i18n } = nextI18Next.useTranslation();
  const result = getPathTranslation(href.toString());

  if (!result) {
    return href;
  }
  const { pathTranslation, parsedUrl } = result;
  const localizedRoute = pathTranslation.locales[i18n.language];
  if (!localizedRoute) {
    return href;
  }

  const toPath = compile(localizedRoute);
  return toPath(parsedUrl.params);
}

function getPathTranslation(url: string) {
  for (let i = 0; i < routing.length; i++) {
    const match = matcher<{ path: string }>(routing[i].original);
    const parsed = match(url);
    if (!parsed) {
      continue;
    }
    return { pathTranslation: routing[i], parsedUrl: parsed };
  }
  return null;
}
