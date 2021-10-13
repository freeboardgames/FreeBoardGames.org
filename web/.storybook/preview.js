import { I18nextProvider } from 'react-i18next';
import { addDecorator } from '@storybook/react';
import i18n from 'i18next';

addDecorator(i18nextDecorator());

function i18nextDecorator() {
  return (Story) => (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
}

// .storybook/preview.js

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'pt', right: '🇧🇷', title: 'Português' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};

