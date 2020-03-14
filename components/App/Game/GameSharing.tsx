import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import ContentCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from './FacebookIcon';
import WhatsAppIcon from './WhatsAppIcon';
import QrCodeIcon from './QrCodeIcon';
import copy from 'copy-to-clipboard';
import ReactGA from 'react-ga';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { IRoomMetadata } from '../Lobby/LobbyService';
import AlertLayer from './AlertLayer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { QrCodePopup } from '../Lobby/QrCodePopup';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

interface IGameSharingProps {
  gameCode: string;
  roomID: string;
  roomMetadata: IRoomMetadata;
}

interface IGameSharingState {
  showingQrCode: boolean;
  copyButtonRecentlyPressed: boolean;
}

export class GameSharing extends React.Component<IGameSharingProps, IGameSharingState> {
  state: IGameSharingState = { showingQrCode: false, copyButtonRecentlyPressed: false };

  private sendEmailCallback: any;
  private shareFacebookCallback: any;
  private copyClipboardCallback: any;
  private showQrCodeCallback: any;
  private shareWhatsAppCallback: any;

  constructor(props: any) {
    super(props);
    this.sendEmailCallback = this.sendEmail.bind(this);
    this.shareFacebookCallback = this.shareFacebook.bind(this);
    this.copyClipboardCallback = this.copyClipboard.bind(this);
    this.showQrCodeCallback = this.showQrCode.bind(this);
    this.shareWhatsAppCallback = this.shareWhatsApp.bind(this);
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
              <QrCodePopup url={this._getLink()} toggleQrCode={this.showQrCodeCallback} />
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
              <Tooltip title="Send link by e-mail" aria-label="E-mail">
                <IconButton onClick={this.sendEmailCallback}>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on Facebook" aria-label="Facebook">
                <IconButton onClick={this.shareFacebookCallback}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share on WhatsApp" aria-label="WhatsApp">
                <IconButton onClick={this.shareWhatsAppCallback}>
                  <WhatsAppIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Show QR code" aria-label="QR code">
                <IconButton onClick={this.showQrCodeCallback}>
                  <QrCodeIcon />
                </IconButton>
              </Tooltip>
              <Button
                variant="contained"
                color={copyButtonColor}
                onClick={this.copyClipboardCallback}
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

  sendEmail() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'sendEmail',
      label: this.props.gameCode,
    });
    location.assign('mailto:?body=' + this._getLink());
  }

  shareFacebook() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareFacebook',
      label: this.props.gameCode,
    });
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));
  }

  shareWhatsApp() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareWhatsApp',
      label: this.props.gameCode,
    });
    window.open('https://api.whatsapp.com/send?text=' + encodeURI(this._getLink()));
  }

  copyClipboard() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'copyClipboard',
      label: this.props.gameCode,
    });
    copy(this._getLink());
    setTimeout(() => this.setState({ copyButtonRecentlyPressed: false }), 3000);
    this.setState({ copyButtonRecentlyPressed: true });
  }

  showQrCode() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'showQrCode',
      label: this.props.gameCode,
    });
    this._toggleShowingQrCode();
  }

  _toggleShowingQrCode() {
    if (!this.state.showingQrCode) {
      window.scrollTo(0, 0);
    }
    this.setState(oldState => ({ ...oldState, showingQrCode: !this.state.showingQrCode }));
  }

  _getLink() {
    const origin = window.location.origin;
    const gameCode = this.props.gameCode;
    const roomID = this.props.roomID;
    return `${origin}/room/${gameCode}/${roomID}`;
  }
}
