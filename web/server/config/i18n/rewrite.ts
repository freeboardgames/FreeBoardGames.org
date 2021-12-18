import translatedPaths from 'infra/i18n/paths';
import { nextI18NextRewrites } from 'next-i18next/rewrites';
import { localeSubpaths } from './localeSubpaths';

export function i18nRewrites() {
  const rewrites = translatedPaths.map((t) => t.rewrites).flat();

  return [...rewrites, ...nextI18NextRewrites(localeSubpaths)];
}
