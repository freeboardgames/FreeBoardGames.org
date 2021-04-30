/* eslint-disable react/prop-types */
import { LinkProps } from 'next/link';
import React, { FC } from 'react';
import { nextI18Next } from '../config';
import { useHref } from '../hooks';

const { Link: NextLink } = nextI18Next;

export const Link: FC<LinkProps> = (props) => {
  const href = useHref(props.href);
  return <NextLink {...props} href={href} />;
};
