import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

const GLOBAL_NOINDEX = process.env.NODE_ENV !== 'production';

interface SeoProps {
  overrideTitle?: string;
}

function getDefaultValues() {
  const defaults: NextSeoProps = { noindex: GLOBAL_NOINDEX, nofollow: GLOBAL_NOINDEX };
  return defaults;
}

export default function SEO(props: NextSeoProps & SeoProps) {
  if (props.overrideTitle) {
    props = { ...props, title: props.overrideTitle };
  } else {
    props = { ...props, title: `${props.title} - FreeBoardGames.org` };
  }
  return <NextSeo {...getDefaultValues()} {...props} />;
}
