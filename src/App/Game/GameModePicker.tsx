import React from 'react';
import AndroidIcon from '@material-ui/icons/Android';
import GroupIcon from '@material-ui/icons/Group';
import WifiIcon from '@material-ui/icons/Wifi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '@material-ui/lab/Slider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface IGameModePickerProps {
  gameCode: string;
  modes: IGameModeInfo[];
}

interface IGameModePickerState {
  extraInfo: { [mode: string]: number }
}

export interface IGameModeInfo {
  mode: GameMode;
  cardDescription: string;
  extraInfo?: IGameModeExtraInfo;
}

interface IGameModeExtraInfo {
  type: string;
}

export interface IGameModeExtraInfoSlider extends IGameModeExtraInfo {
  type: 'slider';
  min: number;
  max: number;
}

export enum GameMode {
  AI = 'AI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}

export class GameModePicker extends React.Component<IGameModePickerProps, IGameModePickerState> {
  state = { extraInfo: {} };
  _getLink = (to: string) => (props: any) => {
    return React.createElement(Link, { ...props, to }, props.children);
  }

  _handleExtraInfoChange = (mode: GameMode) => (event: any, value: number) => {
    const newState: IGameModePickerState = {
      ...this.state,
      extraInfo: {
        ...this.state.extraInfo,
      },
    };
    newState.extraInfo[mode] = value;
    this.setState(newState);
  }

  render() {
    const modes = [];
    for (const mode of this.props.modes) {
      modes.push(this._getCard(mode));
    }
    return (
      <div>
        <Typography variant="subheading" style={{ marginBottom: '16px' }}>
          Choose game mode
        </Typography>
        {modes}
      </div>
    );
  }

  _getCard(info: IGameModeInfo) {
    let title;
    let icon;
    switch (info.mode) {
      case GameMode.AI:
        title = 'Computer (AI)';
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        title = 'Local Friend';
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        title = 'Online Friend';
        icon = <WifiIcon />;
        break;
    }
    const extraInfo = this._getExtraInfo(info);
    return (
      <Card key={title} style={{ marginBottom: '16px' }}>
        <CardHeader
          avatar={
            <Avatar aria-label={title}>
              {icon}
            </Avatar>}
          title={title}
        />
        <CardContent>
          <Typography component="p">
            {info.cardDescription}
          </Typography>
          {extraInfo}
        </CardContent>
        <CardActions>
          <Button
            component={this._getLink(this._getUrl(info))}
            variant="contained"
            color="primary"
            style={{ marginLeft: 'auto' }}
          >
            Play
          </Button>
        </CardActions>
      </Card>
    );
  }

  _getExtraInfo(info: IGameModeInfo) {
    if (info.extraInfo) {
      const extraInfo = info.extraInfo;
      const value = this._getExtraInfoValue(info);
      if (extraInfo.type === 'slider') {
        const slider = (extraInfo as IGameModeExtraInfoSlider);
        return (
          <div style={{ marginTop: '16px' }}>
            <Typography id="label" style={{ marginBottom: '8px' }}>
              Difficulty {value}/{slider.max}
            </Typography>
            <Slider
              value={value}
              min={slider.min}
              max={slider.max}
              step={1}
              onChange={this._handleExtraInfoChange(info.mode)}
            />
          </div>
        );
      }
    }
    return null;
  }

  _getExtraInfoValue(info: IGameModeInfo): number {
    return (this.state.extraInfo as any)[info.mode] || 1;
  }

  _getUrl(info: IGameModeInfo) {
    const uid = shortid.generate();
    const mode = info.mode;
    switch (mode) {
      case GameMode.AI:
        if (info.extraInfo) {
          return `/g/${this.props.gameCode}/AI/${this._getExtraInfoValue(info)}`;
        } else {
          return `/g/${this.props.gameCode}/AI`;
        }
      case GameMode.LocalFriend:
        return `/g/${this.props.gameCode}/local`;
      case GameMode.OnlineFriend:
        return `/g/${this.props.gameCode}/online/${uid}/0`;
    }
  }
}
