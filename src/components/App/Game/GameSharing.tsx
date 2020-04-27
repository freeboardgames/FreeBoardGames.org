import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContentCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from './FacebookIcon';
import WhatsAppIcon from './WhatsAppIcon';
import QrCodeIcon from './QrCodeIcon';
import copy from 'copy-to-clipboard';
import ReactGA from 'react-ga';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AlertLayer from './AlertLayer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { QrCodePopup } from '../Lobby/QrCodePopup';
import { lightGreen } from '@material-ui/core/colors';
import { Room } from 'dto/Room';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

interface IGameSharingProps {
  gameCode: string;
  roomID: string;
  roomMetadata: Room;
}

interface IGameSharingState {
  showingQrCode: boolean;
  copyButtonRecentlyPressed: boolean;
}

export class GameSharing extends React.Component<IGameSharingProps, IGameSharingState> {
  state: IGameSharingState = { showingQrCode: false, copyButtonRecentlyPressed: false };

  constructor(props: any) {
    super(props);
  }

  render() {
    let copyButtonColor;
    let copyButtonText;
    if (this.state.copyButtonRecentlyPressed) {
      copyButtonText = 'Copied!';
      copyButtonColor = 'secondary';
    } else {
      copyButtonText = 'Copy Link';
      copyButtonColor = 'primary';
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {this.state.showingQrCode ? (
            <AlertLayer>
              <QrCodePopup url={this._getLink()} toggleQrCode={this._toggleShowingQrCode} />
            </AlertLayer>
          ) : null}
          <Card>
            <CardContent>
              <Typography style={{ paddingBottom: '16px' }} variant="h5" component="h2">
                Invite Your Friends
              </Typography>
              <TextField style={{ width: '100%' }} defaultValue={this._getLink()} label="Link" />
            </CardContent>
            <CardActions>
              <Tooltip title="Share on Facebook" aria-label="Facebook">
                <IconButton onClick={this._shareFacebook}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on WhatsApp" aria-label="WhatsApp">
                <IconButton onClick={this._shareWhatsApp}>
                  <WhatsAppIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Show QR code" aria-label="QR code">
                <IconButton onClick={this._showQrCode}>
                  <QrCodeIcon />
                </IconButton>
              </Tooltip>
              <Button
                variant="contained"
                color={copyButtonColor}
                onClick={this._copyClipboard}
                style={{ marginLeft: 'auto' }}
              >
                <ContentCopyIcon aria-label="Copy" style={{ marginRight: '8px' }} />
                {copyButtonText}
              </Button>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }

  _shareFacebook = () => {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareFacebook',
      label: this.props.gameCode,
    });
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));
  };

  _shareWhatsApp = () => {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareWhatsApp',
      label: this.props.gameCode,
    });
    window.open('https://api.whatsapp.com/send?text=' + encodeURI(this._getLink()));
  };

  _copyClipboard = () => {
    ReactGA.event({
      category: 'GameSharing',
      action: 'copyClipboard',
      label: this.props.gameCode,
    });
    copy(this._getLink());
    setTimeout(() => this.setState({ copyButtonRecentlyPressed: false }), 3000);
    this.setState({ copyButtonRecentlyPressed: true });
  };

  _showQrCode = () => {
    ReactGA.event({
      category: 'GameSharing',
      action: 'showQrCode',
      label: this.props.gameCode,
    });
    this._toggleShowingQrCode();
  };

  _toggleShowingQrCode = () => {
    if (!this.state.showingQrCode) {
      window.scrollTo(0, 0);
    }
    this.setState((oldState) => ({ ...oldState, showingQrCode: !this.state.showingQrCode }));
  };

  _getLink = () => {
    const origin = window.location.origin;
    const roomID = this.props.roomID;
    return `${origin}/room/${roomID}`;
  };
}
