import MessagePage from 'infra/common/components/alert/MessagePage';
import { useTranslation } from 'infra/i18n';

export function LoadingMessage() {
  const { t } = useTranslation('LoadingMessage');
  return <MessagePage type="loading" message={t('loading')} />;
}
