import { localeExtension, localePath } from '../constants';

// The i18next-fs-backend is the package responsible to read
// locale data of a given namespace from the filesystem.
// At this time it encodes slashes in namespaces;
// see https://github.com/i18next/i18next-fs-backend/issues/13.
// Since we're using subdirectories we can make it work
// by providing a loadPath function instead of string.
// See https://github.com/i18next/i18next-fs-backend#backend-options.
export const backend = {
  loadPath: (lang, ns) => {
    if (typeof window === 'undefined') {
      return `${localePath}/${lang}/${ns}.${localeExtension}`;
    }
    return `${localePath.substr(8)}/${lang}/${ns}.${localeExtension}`;
  },
};
