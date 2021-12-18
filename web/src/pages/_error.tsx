/* eslint-disable react/react-in-jsx-scope */

import MessagePage from 'infra/common/components/alert/MessagePage';
import { useTranslation } from 'infra/i18n';

export default function ErrorPage() {
  const { t } = useTranslation('ErrorPage');
  return <MessagePage type={'error'} message={t('page_not_found')} />;
}

ErrorPage.getInitialProps = () => {
  return {
    namespacesRequired: ['ErrorPage'],
  };
};
