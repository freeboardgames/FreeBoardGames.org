import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';
import IconButton from 'material-ui/IconButton';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import * as copy from 'copy-to-clipboard';
import * as PropTypes from 'prop-types';
import * as ReactGA from 'react-ga';

interface IGameSharingProps {
  gameCode: string;
  matchCode: string;
  playerID: string;
  onDismiss: () => void;
}

export class GameSharing extends React.Component<IGameSharingProps, {}> {
  static propTypes = {
    gameCode: PropTypes.string,
    matchCode: PropTypes.string,
    playerID: PropTypes.string,
    onDismiss: PropTypes.func,
  };

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
      <Card>
        <CardTitle title="Invite Your Friend" />
        <CardText>
          <div>
            <IconButton
              tooltip="Send link by e-mail"
              onClick={this.sendEmailCallback}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              tooltip="Share on Facebook"
              onClick={this.shareFacebookCallback}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              tooltip="Share on Twitter"
              onClick={this.shareTwitterCallback}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              tooltip="Copy link to clipboard"
              onClick={this.copyClipboardCallback}
            >
              <ContentCopyIcon />
            </IconButton>
          </div>
          <TextField
            defaultValue={this._getLink()}
            floatingLabelText="Link"
          />
          <br />
          <RaisedButton
            label="Done"
            primary={true}
            onClick={this.props.onDismiss}
          />
        </CardText>
      </Card>
    );
  }

  sendEmail() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'sendEmail',
    });
    location.assign('mailto:?body=' + this._getLink());
  }

  shareFacebook() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareFacebook',
    });
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(this._getLink()));
  }

  shareTwitter() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'shareTwitter',
    });
    window.open('https://www.twitter.com/share?url=' + encodeURI(this._getLink()));
  }

  copyClipboard() {
    ReactGA.event({
      category: 'GameSharing',
      action: 'copyClipboard',
    });
    copy(this._getLink());
    alert('Link copied to clipboard');
    this.props.onDismiss();
  }

  _getLink() {
    const player = (this.props.playerID === '0') ? '1' : '0';
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    const gameCode = this.props.gameCode;
    const matchCode = this.props.matchCode;
    return `${origin}/g/${gameCode}/match/${matchCode}/${player}`;
  }
}
