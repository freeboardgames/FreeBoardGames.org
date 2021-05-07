import { logger } from './log';
import translatedPaths from 'infra/i18n/paths';

export function i18nRedirects() {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return [];

  const redirects = translatedPaths.map((t) => t.redirect()).flat();

  logger.debug('redirects %j', redirects);

  return [...redirects];
}
