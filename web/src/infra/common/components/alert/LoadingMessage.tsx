import MessagePageClass from 'infra/common/components/alert/MessagePageClass';
import { useTranslation } from 'infra/i18n';

export function LoadingMessage() {
  const { t } = useTranslation('LoadingMessage');
  return <MessagePageClass type="loading" message={t('loading')} />;
}
