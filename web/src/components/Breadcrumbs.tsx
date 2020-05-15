import React from 'react';
import { BreadcrumbJsonLd, BreadCrumbJsonLdProps } from 'next-seo';

export default function Breadcrumbs(props: BreadCrumbJsonLdProps) {
  return <BreadcrumbJsonLd {...props} />;
}
