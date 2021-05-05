import { localizedRoutes } from './localizedRoutes';
import { logger } from './log';

export function i18nRedirects() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const redirects = localizedRoutes.map((r) => r.redirects.flat()).flat();

  logger.debug('redirects %j', redirects);

  return [...redirects];
}
