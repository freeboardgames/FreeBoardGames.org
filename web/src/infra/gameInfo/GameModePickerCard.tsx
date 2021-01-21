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
import css from './GameModePickerCard.module.css';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import Typography from '@material-ui/core/Typography';
import {
  GameCustomization,
  FullGameCustomizationState,
  GameCustomizationState,
  CustomizationType,
} from 'gamesShared/definitions/customization';
import { withSettingsService, SettingsService } from 'infra/settings/SettingsService';
import { QuickCustomization } from 'infra/settings/QuickCustomization';
import { FullCustomization } from 'infra/settings/FullCustomization';

interface GameModePickerCardProps {
  gameDef: IGameDef;
  info: IGameModeInfo;
  playOnlineGameCallback: (info: IGameModeInfo, numPlayers: number) => () => void;
  playButtonError: boolean;
  playButtonDisabled: boolean;
  settingsService: SettingsService;
}

interface GameModePickerCardState {
  numPlayers: number;
  customization: GameCustomization | null;
  customizationState: FullGameCustomizationState;
}

export class GameModePickerCardInternal extends React.Component<GameModePickerCardProps, GameModePickerCardState> {
  state = {
    numPlayers: this.props.gameDef.minPlayers,
    customization: null,
    customizationState: {} as FullGameCustomizationState,
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
          <CardHeader
            avatar={<Avatar aria-label={title}>{icon}</Avatar>}
            action={this.renderFullCustomization()}
            title={title}
          />
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

  componentDidMount() {
    if (!this.props.gameDef.customization) {
      return;
    }
    this.props.gameDef.customization().then((customizationModule) => {
      this.setState({ customization: customizationModule.default });
    });
    const customizationState = this.props.settingsService.getGameSetting('customization', this.props.gameDef.code);
    this.setState({ customizationState });
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

  private renderFullCustomization() {
    return (
      <FullCustomization
        info={this.props.info}
        customization={this.state.customization}
        customizationState={this.state.customizationState}
        changeCustomValue={this._changeCustomValue}
      />
    );
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
        <QuickCustomization
          info={this.props.info}
          customization={this.state.customization}
          customizationState={this.state.customizationState}
          changeCustomValue={this._changeCustomValue}
        />
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

  _changeCustomValue = (customizationType: CustomizationType) => (value?: unknown) => {
    const mode = this.props.info.mode;
    const customizationState: GameCustomizationState = this.state.customizationState[mode] || {};
    if (customizationType == CustomizationType.QUICK) {
      customizationState.quick = value;
    } else if (customizationType == CustomizationType.FULL) {
      customizationState.full = value;
    }
    const fullCustomizationState: FullGameCustomizationState = {
      ...this.state.customizationState,
      [mode]: customizationState,
    };
    this.props.settingsService.setGameSetting('customization', this.props.gameDef.code, fullCustomizationState);
    this.setState({ customizationState: fullCustomizationState });
  };
}

export const GameModePickerCard = withSettingsService(GameModePickerCardInternal);
