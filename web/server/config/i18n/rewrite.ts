import { nextI18NextRewrites } from 'next-i18next/rewrites';
import { localeSubpaths } from './localeSubpaths';
import { localizedRoutes } from './localizedRoutes';

export function i18nRewrites() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const rewrites = localizedRoutes.map((r) => r.rewrites.flat()).flat();

  return [...rewrites, ...nextI18NextRewrites(localeSubpaths)];
}
