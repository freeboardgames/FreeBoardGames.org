/* eslint-disable react/prop-types */
import { nextI18Next, useHref } from 'infra/i18n';
import { LinkProps } from 'next/link';
import React, { FC } from 'react';

const { Link: NextLink } = nextI18Next;

export const Link: FC<LinkProps> = (props) => {
  const href = useHref(props.href);
  return <NextLink {...props} href={href} />;
};
