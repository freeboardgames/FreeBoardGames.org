import React, { ChangeEvent } from 'react';
import AndroidIcon from '@material-ui/icons/Android';
import GroupIcon from '@material-ui/icons/Group';
import WifiIcon from '@material-ui/icons/Wifi';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { OccupancySelect } from 'infra/common/components/game/OccupancySelect';
import css from './GameModePicker.module.css';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import Typography from '@material-ui/core/Typography';

interface GameModePickerCardProps {
  gameDef: IGameDef;
  info: IGameModeInfo;
  playOnlineGameCallback: (info: IGameModeInfo, numPlayers: number) => () => void;
  playButtonError: boolean;
  playButtonDisabled: boolean;
}

interface GameModePickerCardState {
  numPlayers: number;
}

export class GameModePickerCard extends React.Component<GameModePickerCardProps, GameModePickerCardState> {
 state = {
    numPlayers: 2
 }

 render() {
    let title;
    let description;
    let icon;
    switch (this.props.info.mode) {
      case GameMode.AI:
        title = 'Computer (AI)';
        description = 'Play against the computer in your browser.';
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        title = 'Local Friend';
        description = 'Share your device and play with a friend locally.';
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        title = 'Online Friend';
        description = 'Share a link and play with a friend online.';
        icon = <WifiIcon />;
        break;
    }
    return (
      <Card key={title} style={{ margin: '0 0 16px 0' }}>
        <CardHeader avatar={<Avatar aria-label={title}>{icon}</Avatar>} title={title} />
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
          {this.renderPersonalization()}
          {this.renderButton()}
        </CardActions>
      </Card>
    );
 }

 private renderButton() {
    let btnText = 'Play';
    let color = 'primary'; // FIXME: couldn't find the type
    if (this.props.playButtonError) {
      btnText = 'Error';
      color = 'secondary';
    } else if (this.props.playButtonDisabled) {
      btnText = 'Loading';
    }
    if (this.props.info.mode === GameMode.OnlineFriend) {
      return (
        <Button
          data-testid="playButton"
          variant="contained"
          color={color as any}
          style={{ marginLeft: 'auto' }}
          onClick={this.props.playOnlineGameCallback(this.props.info, this.state.numPlayers)}
          disabled={this.props.playButtonDisabled}
        >
          {btnText}
        </Button>
      );
    } else {
      const linkInfo = this.getLink();
      const linkHref = linkInfo[0],
        linkAs = linkInfo[1];
      return (
        <Link href={linkHref} as={linkAs}>
          <Button
            data-testid={`playbutton-${this.props.gameDef.code}-${this.props.info.mode}`}
            component={'a'}
            variant="contained"
            color="primary"
            style={{ marginLeft: 'auto' }}
          >
            Play
          </Button>
        </Link>
      );
    }
 }

private renderPersonalization() {
    let numPlayers = null;
    if (this.props.info.mode == GameMode.OnlineFriend) {
      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {
        numPlayers = this.getExtraInfoNumPlayers();
      }
    }
    let quickCustomization = null;
    // TODO: Write new customization logic.
    return <>{numPlayers}{quickCustomization}</>;
  }

  private getExtraInfoNumPlayers() {
    return (
      <OccupancySelect
        game={this.props.gameDef}
        value={this.state.numPlayers}
        onChange={this._handleNumPlayersSelect}
        className={css.OccupancySelect}
      />
    );
  }

  private getLink() {
    const mode = this.props.info.mode;
    let hrefAndAs: string[];
    switch (mode) {
      case GameMode.AI:
        hrefAndAs = ['/play/[gameCode]/[mode]', `/play/${this.props.gameDef.code}/AI`];
        break;
      case GameMode.LocalFriend:
        hrefAndAs = ['/play/[gameCode]/[mode]', `/play/${this.props.gameDef.code}/local`];
        break;
      case GameMode.OnlineFriend:
        hrefAndAs = [
          '/room/new/[gameCode]/[numPlayers]',
          `/room/new/${this.props.gameDef.code}/${this.state.numPlayers}`,
        ];
        break;
    }
    return hrefAndAs;
  }

  _handleNumPlayersSelect = (event: ChangeEvent<{ value: number }>) => {
    const numPlayers = event.target.value;
    this.setState({ numPlayers });
  };
}