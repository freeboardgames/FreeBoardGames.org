import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContentCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from './icons/FacebookIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import QrCodeIcon from './icons/QrCodeIcon';
import ShareIcon from './icons/ShareIcon';
import copy from 'copy-to-clipboard';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AlertLayer from '../common/components/alert/AlertLayer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { QrCodePopup } from './QrCodePopup';
import { lightGreen } from '@material-ui/core/colors';
import { shortIdToAnimal } from '../lobby/LobbyUtil';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { room } from 'infra/navigation';

const theme = createMuiTheme({
  palette: {
    secondary: lightGreen,
  },
});

interface IGameSharingInnerProps extends WithTranslation {}

interface IGameSharingOutterProps {
  gameCode: string;
  roomID: string;
  isPublic: boolean;
  gameName: string;
}

interface IGameSharingState {
  showingQrCode: boolean;
  copyButtonRecentlyPressed: boolean;
}

export class GameSharingInternal extends React.Component<
  IGameSharingInnerProps & IGameSharingOutterProps,
  IGameSharingState
> {
  state: IGameSharingState = { showingQrCode: false, copyButtonRecentlyPressed: false };

  render() {
    const { t } = this.props;

    let copyButtonColor;
    let copyButtonText;
    if (this.state.copyButtonRecentlyPressed) {
      copyButtonText = t('copied');
      copyButtonColor = 'secondary';
    } else {
      copyButtonText = t('copy_link');
      copyButtonColor = 'primary';
    }
    let shareButton;

    if (navigator.canShare && navigator.canShare(this._getShareData())) {
      shareButton = (
        <Tooltip title={t('share')} aria-label="Share">
          <IconButton onClick={this._share}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      );
    } else {
      shareButton = null;
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
              {this.renderGameName()}
              <Typography style={{ paddingBottom: '16px' }} variant="h5" component="h2">
                {t('invite_your_friends')}
              </Typography>
              <TextField
                style={{ width: '100%' }}
                defaultValue={this._getLink()}
                label="Link"
                inputProps={{ readOnly: true }}
              />
            </CardContent>
            <CardActions>
              <Tooltip title={t('share_on_facebook')} aria-label="Facebook">
                <IconButton onClick={this._shareFacebook}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('share_on_whats_app')} aria-label="WhatsApp">
                <IconButton onClick={this._shareWhatsApp}>
                  <WhatsAppIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('show_qr_code')} aria-label="QR code">
                <IconButton onClick={this._showQrCode}>
                  <QrCodeIcon />
                </IconButton>
              </Tooltip>
              {shareButton}
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

  renderGameName() {
    const { isPublic, t, roomID } = this.props;

    if (isPublic) {
      return (
        <Typography style={{ paddingBottom: '16px', float: 'right' }} variant="h6" component="h3">
          {t('room', { name: shortIdToAnimal(roomID) })}
        </Typography>
      );
    }
    return null;
  }

  _shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));
  };

  _shareWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?text=' + encodeURI(this._getLink()));
  };

  _copyClipboard = () => {
    copy(this._getLink());
    setTimeout(() => this.setState({ copyButtonRecentlyPressed: false }), 3000);
    this.setState({ copyButtonRecentlyPressed: true });
  };

  _showQrCode = () => {
    this._toggleShowingQrCode();
  };

  _share = () => {
    try {
      navigator.share(this._getShareData());
    } catch (err) {
      //Some user agents throw an exception on user cancellation, which is not really exceptional
    }
  };

  _toggleShowingQrCode = () => {
    if (!this.state.showingQrCode) {
      window.scrollTo(0, 0);
    }
    this.setState((oldState) => ({ ...oldState, showingQrCode: !this.state.showingQrCode }));
  };

  _getLink = () => {
    const { i18n, roomID } = this.props;
    const origin = window.location.origin;
    const href = room(roomID)(i18n.language);
    return new URL(href, origin).toString();
  };

  _getShareData = () => {
    const { t } = this.props;
    let textAndTitle = t('play_game', { name: this.props.gameName });
    return {
      title: textAndTitle,
      text: textAndTitle,
      url: this._getLink(),
    };
  };
}

const enhance = compose<IGameSharingInnerProps, IGameSharingOutterProps>(withTranslation('GameSharing'));

export const GameSharing = enhance(GameSharingInternal);
