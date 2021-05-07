import { Router, TFunction } from 'next-i18next';
import { UrlObject } from 'url';

export type Url = UrlObject | string;

export interface TransitionOptions {
  shallow?: boolean;
}

export type NextRouter = Router;

export type { WithRouterProps } from 'next/dist/client/with-router';

export type WithTranslate<T extends string = 'translate'> = Record<T, TFunction>;

export type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export type Rewrite = {
  source: string;
  destination: string;
};

export interface TranslatedPath {
  original: string;
  locales: { [locale: string]: string };
  rewrite(): Rewrite[];
  redirect(): Redirect[];
}

export type Language = 'pt' | 'en';
