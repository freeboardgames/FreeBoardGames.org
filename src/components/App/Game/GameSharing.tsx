import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import * as PropTypes from 'prop-types';

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

  render() {
    return (
      <Card>
        <CardTitle title="Invite Friend" />
        <CardText>
          Share this link with your friend:
          <TextField
            defaultValue={this._getLink()}
            floatingLabelText="Link"
          />
          <RaisedButton
            label="Done"
            primary={true}
            onClick={this.props.onDismiss}
          />
        </CardText>
      </Card>
    );
  }

  _getLink() {
    const player = (this.props.playerID === '0') ? '1' : '0';
    const origin = window.location.origin;
    const gameCode = this.props.gameCode;
    const matchCode = this.props.matchCode;
    return `${origin}/g/${gameCode}/match/${matchCode}/${player}`;
  }
}
