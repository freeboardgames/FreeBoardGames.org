import { defaultLanguage, localeExtension, localePath } from '../constants';

// On the server side next-i18next collects all the namespace
// files and loads them upfront. It's only on the client that
// they are loaded individually.
// At this time the namespaces are collected shallowly, i.e.
// only files directly under the default language directory
// are considered. Since we're using subdirectories we need
// to change this a recursive algorithm.
// This code looks similar to what next-i18next does by default,
// see https://github.com/isaachinman/next-i18next/blob/abdf06545410f340b0529e3448f8b102ab840249/src/config/create-config.ts#L99
// Also we require glob inline to avoid having
// it included in the client side bundle.
export const namespace =
  typeof window === 'undefined'
    ? require('glob')
        .sync(`${localePath}/${defaultLanguage}/**/*.${localeExtension}`)
        .map((file) => {
          return file.replace(new RegExp(`${localePath}/${defaultLanguage}/(.+?).${localeExtension}`), '$1');
        })
    : ['common'];
