import React from 'react';
import AndroidIcon from '@material-ui/icons/Android';
import GroupIcon from '@material-ui/icons/Group';
import WifiIcon from '@material-ui/icons/Wifi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '@material-ui/lab/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
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

export interface IGameModeExtraInfoDropdown extends IGameModeExtraInfo {
  type: 'dropdown';
  options: string[];
}

export enum GameMode {
  AI = 'AI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}

export class GameModePicker extends React.Component<IGameModePickerProps, IGameModePickerState> {
  state = { extraInfo: {} };
  _getLink = (to: string) => (props: any) => {
    return React.createElement(Link, { ...props, to, rel: 'nofollow' }, props.children);
  }

  _handleSliderChange = (mode: GameMode) => (event: any, value: number) => {
    const newState: IGameModePickerState = {
      ...this.state,
      extraInfo: {
        ...this.state.extraInfo,
      },
    };
    newState.extraInfo[mode] = value;
    this.setState(newState);
  }

  _handleClickSelection = (mode: GameMode, value: any) => (event: any) => {
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
    let description;
    let icon;
    switch (info.mode) {
      case GameMode.AI:
        title = 'Computer (AI)';
        description = 'Play against the computer in your browser.';
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        title = 'Local Friend';
        description = 'Share your device and play against a friend locally.';
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        title = 'Online Friend';
        description = 'Share a link and play against a friend online.';
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
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {extraInfo}
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
      if (extraInfo.type === 'slider') {
        const slider = (extraInfo as IGameModeExtraInfoSlider);
        return this._getExtraInfoSlider(info, slider);
      } else if (extraInfo.type === 'dropdown') {
        const dropdown = (extraInfo as IGameModeExtraInfoDropdown);
        return this._getExtraInfoDropdown(info, dropdown);
      }
    }
    return null;
  }

  _getExtraInfoValue(info: IGameModeInfo): number {
    return (this.state.extraInfo as any)[info.mode] || 1;
  }

  _getExtraInfoSlider(info: IGameModeInfo, slider: IGameModeExtraInfoSlider) {
    const value = this._getExtraInfoValue(info);
    return (
      <div style={{ marginBottom: '18px', width: '80%' }}>
        <Typography id="label" style={{ marginBottom: '8px' }}>
          Difficulty {value}/{slider.max}
        </Typography>
        <Slider
          value={value}
          min={slider.min}
          max={slider.max}
          step={1}
          onChange={this._handleSliderChange(info.mode)}
        />
      </div>
    );
  }

  _getExtraInfoDropdown(info: IGameModeInfo, dropdown: IGameModeExtraInfoDropdown) {
    const list: JSX.Element[] = dropdown.options.map((option, idx) => {
      idx++;
      return (
        <MenuItem
          onClick={this._handleClickSelection(info.mode, idx)}
          key={option}
          value={option}
          selected={this._getExtraInfoValue(info) === idx}
        >
          {option}
        </MenuItem>);
    });
    return (
      <div>
        <MenuList
          style={{
            paddingTop: 0,
            display: 'flex',
          }}
        >
          {list}
        </MenuList>
      </div>
    );
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
