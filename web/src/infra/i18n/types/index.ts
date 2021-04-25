import { Router } from 'next-i18next';
import { UrlObject } from 'url';

export type Url = UrlObject | string;

export interface TransitionOptions {
  shallow?: boolean;
}

export type NextRouter = Router;
