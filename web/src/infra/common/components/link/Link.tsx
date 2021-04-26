/* eslint-disable react/prop-types */
import { Link as NextLink, useHref } from 'infra/i18n';
import { LinkProps } from 'next/link';
import React, { FC } from 'react';

export const Link: FC<LinkProps> = (props) => {
  const href = useHref(props.href);
  return <NextLink {...props} href={href} />;
};
