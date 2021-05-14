import AlertLayer from 'infra/common/components/alert/AlertLayer';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'infra/i18n';

export function ConnectionLost() {
  const { t } = useTranslation('ConnectionLost');
  return (
    <AlertLayer>
      <Typography variant="h4">{t('connection_lost')}</Typography>
      <Typography variant="body1">{t('trying_to_connect')}</Typography>
    </AlertLayer>
  );
}
