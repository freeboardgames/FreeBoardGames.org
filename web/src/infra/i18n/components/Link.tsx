/* eslint-disable react/prop-types */
import { LanguagePathResolver } from 'infra/navigation/types';
import { LinkProps } from 'next/link';
import React, { FC } from 'react';
import { nextI18Next } from '../config';
import { Language } from '../types';

const { Link: NextLink } = nextI18Next;

interface Props extends Omit<LinkProps, 'href'> {
  href: LanguagePathResolver;
}

export const Link: FC<Props> = ({ href, ...props }) => {
  const { i18n } = nextI18Next.useTranslation();
  return <NextLink href={href(i18n.language as Language)} {...props} />;
};
