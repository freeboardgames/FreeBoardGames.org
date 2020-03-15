import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

const GLOBAL_NOINDEX = process.env.NODE_ENV !== 'production';

interface SeoProps {
  overrideTitle?: string;
}

function getDefaultValues() {
  // const defaults = {};
  const defaults: NextSeoProps = { noindex: GLOBAL_NOINDEX, nofollow: GLOBAL_NOINDEX };
  return defaults;
}

export default function SEO(props: NextSeoProps & SeoProps) {
  if (props.overrideTitle) {
    props = { ...props, title: props.overrideTitle };
  } else {
    let title = props.title;
    if (!props.title) {
      title = `sahajanand-games.com`;
    } else {
      title += ` - sahajanand-games.com`;
    }
    props = { ...props, title };
  }
  return <NextSeo {...getDefaultValues()} {...props} />;
}
