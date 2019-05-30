import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import ContentCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AlertLayer from './AlertLayer';
import { IPlayerInRoom, IRoomMetadata } from '../Lobby/LobbyService';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

interface IGameSharingProps {
  gameCode: string;
  roomID: string;
  roomMetadata: IRoomMetadata;
}

export class GameSharing extends React.Component<IGameSharingProps, {}> {
  private sendEmailCallback: any;
  private shareFacebookCallback: any;
  private shareTwitterCallback: any;
  private copyClipboardCallback: any;

  constructor(props: any) {
    super(props);
    this.sendEmailCallback = this.sendEmail.bind(this);
    this.shareFacebookCallback = this.shareFacebook.bind(this);
    this.shareTwitterCallback = this.shareTwitter.bind(this);
    this.copyClipboardCallback = this.copyClipboard.bind(this);
  }

  render() {
    return (
      <AlertLayer>
        <Card style={{ whiteSpace: 'nowrap' }}>
          <Typography variant="h5" component="h2" style={{ paddingTop: '16px' }}>
            Invite Your Friend
          </Typography>
          <CardContent>
            <div style={{ paddingBottom: '8px' }}>
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
              <Tooltip title="Share on Twitter" aria-label="Twitter">
                <IconButton onClick={this.shareTwitterCallback}>
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy link to clipboard" aria-label="Clipboard">
                <IconButton onClick={this.copyClipboardCallback}>
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </div>
            <TextField
              defaultValue={this._getLink()}
              label="Link"
            />
            <br />
            <Typography variant="h6" component="h2" style={{ marginTop: '16px' }}>
              Players
            </Typography>
            {this._listOfPlayers()}
          </CardContent>
        </Card>
      </AlertLayer>
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

  shareTwitter() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareTwitter',
      label: this.props.gameCode,
    });
    window.open('https://www.twitter.com/share?url=' + encodeURI(this._getLink()));
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
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    const gameCode = this.props.gameCode;
    const roomID = this.props.roomID;
    return `${origin}/room/${gameCode}/${roomID}`;
  }

  _listOfPlayers = () => {
    const playersList = this.props.roomMetadata.players.map((player: IPlayerInRoom, idx: number) => {
      return (
        <ListItem key={`player-${idx}`}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={player.name} />
        </ListItem>);
    });
    const waitingList = [];
    for (let i = 0; i < this.props.roomMetadata.numberOfPlayers - playersList.length; i++) {
      waitingList.push((
        <ListItem key={`waiting-${i}`}>
          <ListItemAvatar>
            <Avatar>
              <PersonAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText><b>Waiting for player...</b></ListItemText>
        </ListItem>));
    }
    return (
      <List>
        {playersList}
        {waitingList}
      </List>
    );
  }
}
