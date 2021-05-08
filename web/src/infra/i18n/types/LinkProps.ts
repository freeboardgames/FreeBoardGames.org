import { LanguagePathResolver } from 'infra/navigation/types';
import { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends Omit<NextLinkProps, 'href'> {
  href: LanguagePathResolver;
}
