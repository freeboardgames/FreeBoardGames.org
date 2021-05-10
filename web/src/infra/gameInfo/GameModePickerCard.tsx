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
import { Link } from 'infra/i18n';

import { OccupancySelect } from 'infra/common/components/game/OccupancySelect';
import css from './GameModePickerCard.module.css';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import Typography from '@material-ui/core/Typography';
import { CustomizationBar } from 'infra/settings/CustomizationBar';
import { LanguagePathResolver, play, room } from 'infra/navigation';

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
    numPlayers: this.props.gameDef.minPlayers,
  };

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
      <>
        <Card key={title} style={{ margin: '0 0 16px 0' }}>
          <CardHeader avatar={<Avatar aria-label={title}>{icon}</Avatar>} title={title} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            {this.renderCustomizationActions()}
            {this.renderButton()}
          </CardActions>
        </Card>
      </>
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
      return (
        <Link href={this.getLink()}>
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

  private renderCustomizationActions() {
    let numPlayers = null;
    if (this.props.info.mode == GameMode.OnlineFriend) {
      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {
        numPlayers = this.getExtraInfoNumPlayers();
      }
    }
    return (
      <>
        {numPlayers}
        <CustomizationBar gameDef={this.props.gameDef} info={this.props.info} />
      </>
    );
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
    const { info, gameDef } = this.props;
    let link: LanguagePathResolver;

    switch (info.mode) {
      case GameMode.AI:
        link = play(gameDef, GameMode.AI);
        break;
      case GameMode.LocalFriend:
        link = play(gameDef, GameMode.LocalFriend);
        break;
      case GameMode.OnlineFriend:
        link = room('new', gameDef, this.state.numPlayers);
        break;
    }

    return link;
  }

  _handleNumPlayersSelect = (event: ChangeEvent<{ value: number }>) => {
    const numPlayers = event.target.value;
    this.setState({ numPlayers });
  };
}
