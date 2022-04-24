import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useTranslation } from 'infra/i18n';
import { QRCodeSVG } from 'qrcode.react';

interface IQrCodePopupProps {
  url: string;
  toggleQrCode: () => void;
}

const style: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '16px',
  height: 'auto',
  display: 'block',
};

export function QrCodePopup(props: IQrCodePopupProps) {
  const { t } = useTranslation('QrCodePopup');

  return (
    <ClickAwayListener onClickAway={props.toggleQrCode}>
      <Card
        style={{
          marginBottom: '16px',
          whiteSpace: 'nowrap',
          marginLeft: 'auto',
          width: '80vw',
          maxWidth: '450px',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3">
          {t('scan_qr_code')}
        </Typography>
        <QRCodeSVG value={props.url} size={500} style={style as any} renderAs="svg" />
        <Button variant="contained" color="primary" style={{ marginBottom: '16px' }} onClick={props.toggleQrCode}>
          {t('done')}
        </Button>
      </Card>
    </ClickAwayListener>
  );
}
