// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
export interface AlternateLink {
  hreflang: string;
  href: string;
}

export interface UrlTag {
  loc: string;
  alternateLinks: AlternateLink[];
}
