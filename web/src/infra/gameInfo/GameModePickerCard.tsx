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
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IGameModePickerCardInnerProps extends WithTranslation {}

interface IGameModePickerCardOutterProps {
  gameDef: IGameDef;
  info: IGameModeInfo;
  playOnlineGameCallback: (info: IGameModeInfo, numPlayers: number) => () => void;
  playButtonError: boolean;
  playButtonDisabled: boolean;
}

interface IGameModePickerCardProps extends IGameModePickerCardInnerProps, IGameModePickerCardOutterProps {}

interface IGameModePickerCardState {
  numPlayers: number;
}

export class GameModePickerCardInternal extends React.Component<IGameModePickerCardProps, IGameModePickerCardState> {
  state = {
    numPlayers: this.props.gameDef.minPlayers,
  };

  render() {
    let title;
    let description;
    let icon;
    switch (this.props.info.mode) {
      case GameMode.AI:
        title = this.props.t('computer_ai_title');
        description = this.props.t('computer_ai_description');
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        title = this.props.t('local_friend_title');
        description = this.props.t('local_friend_description');
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        title = this.props.t('online_friend_title');
        description = this.props.t('online_friend_description');
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
    let btnText = this.props.t('play');
    let color = 'primary'; // FIXME: couldn't find the type
    if (this.props.playButtonError) {
      (btnText = this.props.t('error')), (color = 'secondary');
    } else if (this.props.playButtonDisabled) {
      btnText = this.props.t('loading');
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
            {this.props.t('play')}
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

const enhance = compose<IGameModePickerCardInnerProps, IGameModePickerCardOutterProps>(
  withTranslation('GameModePickerCard'),
);

export const GameModePickerCard = enhance(GameModePickerCardInternal);
