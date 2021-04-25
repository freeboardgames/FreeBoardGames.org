import { LinkProps } from 'next/link';
import { nextI18Next } from '../config';
import translatedPaths from '../translatedPaths';
import { translateHref } from '../utils';

export function useHref(href: LinkProps['href']): LinkProps['href'] {
  const { i18n } = nextI18Next.useTranslation();
  return translateHref({ href, language: i18n.language, translatedPaths: translatedPaths });
}
