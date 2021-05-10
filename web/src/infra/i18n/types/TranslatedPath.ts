import { Redirect } from './Redirect';
import { Rewrite } from './Rewrite';

export interface TranslatedPath {
  rewrites: Rewrite[];
  redirects: Redirect[];
}
