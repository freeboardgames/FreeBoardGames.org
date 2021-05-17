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
