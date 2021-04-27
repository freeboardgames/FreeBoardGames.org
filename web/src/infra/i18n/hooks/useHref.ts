import { LinkProps } from 'next/link';
import { nextI18Next } from '../config';
import translatedPaths from '../translatedPaths';
import { translateHref } from '../utils';

export function useHref(href: LinkProps['href']): LinkProps['href'] {
  if (process.env.NEXT_PUBLIC_I18N_ENABLED !== 'true') return href;

  const { i18n } = nextI18Next.useTranslation();
  return translateHref({ href, language: i18n.language, translatedPaths: translatedPaths });
}
