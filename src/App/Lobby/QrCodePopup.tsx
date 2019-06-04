import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
const QrCode = require('qrcode.react');

interface IQrCodePopupProps {
  url: string;
  toggleQrCode: () => void;
}

export class QrCodePopup extends React.Component<IQrCodePopupProps, {}> {
  render() {
    const style: React.CSSProperties = {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px',
      height: 'auto',
      display: 'block',
    };

    return (
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
          Scan QR code
        </Typography>
        <QrCode value={this.props.url} size={500} style={style as any} renderAs="svg" />
        <Button variant="contained" color="primary" style={{ marginBottom: '16px' }} onClick={this.props.toggleQrCode}>
          Done
        </Button>
      </Card>
    );
  }
}
