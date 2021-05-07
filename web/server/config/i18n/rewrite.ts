import translatedPaths from 'infra/i18n/paths';
import { nextI18NextRewrites } from 'next-i18next/rewrites';
import { localeSubpaths } from './localeSubpaths';
import { logger } from './log';

export function i18nRewrites() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const rewrites = translatedPaths.map((t) => t.rewrite()).flat();

  logger.debug('rewrites %j', rewrites);

  return [...rewrites, ...nextI18NextRewrites(localeSubpaths)];
}
