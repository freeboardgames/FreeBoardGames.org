import { Router, TFunction } from 'next-i18next';
import { UrlObject } from 'url';
import { WithTranslation as NextWithTranslation } from 'next-i18next';

export type Url = UrlObject | string;

export interface TransitionOptions {
  shallow?: boolean;
}

export type NextRouter = Router;

export type { WithRouterProps } from 'next/dist/client/with-router';

export type WithCurrentGameTranslation = {
  forwardedRef?: unknown;
  translate: TFunction;
};

export type WithNamespace = {
  withNamespace: (namespace: string) => TFunction;
};

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
  rewrites: Rewrite[];
  redirects: Redirect[];
}

export type Language = 'pt' | 'en';

export type WithTranslation = NextWithTranslation & {
  i18n: NextWithTranslation['i18n'] & { language: Language };
};
