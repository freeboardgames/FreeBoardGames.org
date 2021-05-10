/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { nextI18Next } from '../config';
import { Language, LinkProps } from '../types';

const { Link: NextLink } = nextI18Next;

export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const { i18n } = nextI18Next.useTranslation();
  return <NextLink href={href(i18n.language as Language)} {...props} />;
};
