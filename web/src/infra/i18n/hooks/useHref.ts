import { LinkProps } from 'next/link';
import { match as matcher, compile, MatchResult } from 'path-to-regexp';
import routing from 'infra/i18n/routing.json';
import { nextI18Next } from 'infra/i18n';

export function useHref(href: LinkProps['href']): LinkProps['href'] {
  const { i18n } = nextI18Next.useTranslation();
  const { isMatch, locales, parsedUrl, defaultRoute } = matchHrefWithRouting(href.toString());

  if (isMatch) {
    const localizedRoute = locales[i18n.language];
    if (localizedRoute) {
      const toPath = compile(localizedRoute);
      try {
        return toPath(parsedUrl.params);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('fallback to unlocalized href.', localizedRoute, defaultRoute, e.message);
      }
    }
  }

  return href;
}

function matchHrefWithRouting(url: string) {
  let _isMatch = false;
  let _locales: Record<string, string>;
  let _parsedUrl: MatchResult<{ path: string }>;
  let _defaultRoute: string;

  for (let i = 0; i < routing.length; i++) {
    const match = matcher<{ path: string }>(routing[i].default);
    const parsed = match(url);
    if (parsed) {
      _isMatch = true;
      _defaultRoute = routing[i].default;
      _locales = routing[i].locales;
      _parsedUrl = parsed;
      break;
    }
  }

  return {
    isMatch: _isMatch,
    locales: _locales,
    parsedUrl: _parsedUrl,
    defaultRoute: _defaultRoute,
  };
}
