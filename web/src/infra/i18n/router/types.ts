import { UrlObject } from 'url';

export type Url = UrlObject | string;

export interface TransitionOptions {
  shallow?: boolean;
}
