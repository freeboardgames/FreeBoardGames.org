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
import TwitterIcon from './TwitterIcon';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { IRoomMetadata } from '../Lobby/LobbyService';

interface IGameSharingProps {
  gameCode: string;
  roomID: string;
  roomMetadata: IRoomMetadata;
}

export class GameSharing extends React.Component<IGameSharingProps, {}> {
  private sendEmailCallback: any;
  private shareFacebookCallback: any;
  private copyClipboardCallback: any;

  constructor(props: any) {
    super(props);
    this.sendEmailCallback = this.sendEmail.bind(this);
    this.shareFacebookCallback = this.shareFacebook.bind(this);
    this.copyClipboardCallback = this.copyClipboard.bind(this);
  }

  render() {
    return (
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
          <Button
            variant="contained"
            color="primary"
            onClick={this.copyClipboardCallback}
            style={{ marginLeft: 'auto' }}
          >
            <ContentCopyIcon style={{ marginRight: '8px' }} />
            Copy Link
          </Button>
        </CardActions>
      </Card>
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

  copyClipboard() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'copyClipboard',
      label: this.props.gameCode,
    });
    copy(this._getLink());
    alert('Link copied to clipboard');
  }

  _getLink() {
    const origin = typeof window === 'undefined' ? '' : window.location.origin;
    const gameCode = this.props.gameCode;
    const roomID = this.props.roomID;
    return `${origin}/room/${gameCode}/${roomID}`;
  }
}
