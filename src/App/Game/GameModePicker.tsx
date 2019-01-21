import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import AndroidIcon from 'material-ui/svg-icons/action/android';
import GroupIcon from 'material-ui/svg-icons/social/group';
import { List, ListItem } from 'material-ui/List';
import * as shortid from 'shortid';
import * as PropTypes from 'prop-types';

interface IGameModePickerProps {
  gameCode: string,
  modes: GameMode[];
  history: { push: (url: string) => void };
}

export enum GameMode {
  EasyAI = 'easyAI',
  MediumAI = 'mediumAI',
  HardAI = 'hardAI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}

export class GameModePicker extends React.Component<IGameModePickerProps, {}> {
  render() {
    const modes = [];
    for (const mode of this.props.modes) {
      modes.push(this._getListItem(mode));
    }
    return (
      <Card>
        <CardTitle title="Choose Mode" />
        <CardText>
          <List style={{ textAlign: 'left' }}>{modes}</List>
        </CardText>
      </Card>
    );
  }

  _getListItem(mode: GameMode) {
    let text = '';
    let icon = <AndroidIcon />;
    switch (mode) {
      case GameMode.EasyAI:
        text = 'Easy AI';
        icon = <AndroidIcon />;
        break;
      case GameMode.MediumAI:
        text = 'Medium AI';
        icon = <AndroidIcon />;
        break;
      case GameMode.HardAI:
        text = 'Hard AI';
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        text = 'Local Friend';
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        text = 'Online Friend';
        icon = <GroupIcon />;
        break;
    }
    return (
      <ListItem
        key={text}
        primaryText={text}
        leftIcon={icon}
        onClick={this._onClick(mode)}
      />);
  }

  _onClick(mode: GameMode) {
    return () => {
      this.props.history.push(this._getUrl(mode));
    };
  }

  _getUrl(mode: GameMode) {
    const uid = shortid.generate();
    switch (mode) {
      case GameMode.EasyAI:
        return `/g/${this.props.gameCode}/easyAI`;
      case GameMode.MediumAI:
        return `/g/${this.props.gameCode}/mediumAI`;
      case GameMode.HardAI:
        return `/g/${this.props.gameCode}/hardAI`;
      case GameMode.LocalFriend:
        return `/g/${this.props.gameCode}/local`;
      case GameMode.OnlineFriend:
        return `/g/${this.props.gameCode}/online/${uid}/0`;
    }
  }
}
