import { nextI18Next } from '../config';
import translatedPaths from '../translatedPaths';
import { translateHref } from '.';
import { TransitionOptions, Url } from '../types';
import { mix } from './mix';

export const Router = mix(nextI18Next.Router, {
  push: wrap(nextI18Next.Router.push),
  replace: wrap(nextI18Next.Router.replace),
});

function wrap(fn: RouterNavigationFunction): RouterNavigationFunction {
  return (url, as, options) => {
    return fn(
      translateHref({
        href: url,
        language: nextI18Next.i18n.language,
        translatedPaths,
      }),
      as,
      options,
    );
  };
}

type RouterNavigationFunction = (url: Url, as?: Url, options?: TransitionOptions) => Promise<boolean>;
