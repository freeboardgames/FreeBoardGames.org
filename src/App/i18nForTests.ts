import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './i18n/resources';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    debug: true,
  });

export default i18n;
