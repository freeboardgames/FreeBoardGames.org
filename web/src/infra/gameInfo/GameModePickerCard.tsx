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
import { GameCustomization, GameCustomizationState, CustomizationType } from 'gamesShared/definitions/customization';
import { withSettingsService, SettingsService } from 'infra/settings/SettingsService';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import AlertLayer from '../common/components/alert/AlertLayer';

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
  customizationState: GameCustomizationState;
  showCustomizationDialog: boolean;
}

export class GameModePickerCardInternal extends React.Component<GameModePickerCardProps, GameModePickerCardState> {
  state = {
    numPlayers: this.props.gameDef.minPlayers,
    customization: null,
    customizationState: {} as GameCustomizationState,
    showCustomizationDialog: false,
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
        {this.renderCustomizationDialog()}
        <Card key={title} style={{ margin: '0 0 16px 0' }}>
          <CardHeader
            avatar={<Avatar aria-label={title}>{icon}</Avatar>}
            action={this.renderFullCustomizationButton()}
            title={title}
          />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            {this.renderPersonalization()}
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

  private renderPersonalization() {
    let numPlayers = null;
    if (this.props.info.mode == GameMode.OnlineFriend) {
      if (this.props.gameDef.minPlayers < this.props.gameDef.maxPlayers) {
        numPlayers = this.getExtraInfoNumPlayers();
      }
    }
    let quickCustomization = this.renderQuickCustomization();
    return (
      <>
        {numPlayers}
        {quickCustomization}
      </>
    );
  }

  private hasFullCustomization() {
    const custom = this.state.customization;
    if (!custom || !custom.renderFull) {
      return false;
    }
    const fullCustom = custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.state.customizationState?.quick,
      onChange: () => {},
    });
    return fullCustom !== null;
  }

  private renderCustomizationDialog() {
    if (!this.state.showCustomizationDialog) {
      return null;
    }
    return (
      <AlertLayer onClickaway={this.toggleFullCustomizationDialog}>
        <Card className={css.CustomizationCard}>
          {this.renderCustomizationDialogHeader()}
          <div className={css.DialogContentWrapper}>{this.renderCustomizationDialogContent()}</div>
        </Card>
      </AlertLayer>
    );
  }

  private renderCustomizationDialogContent() {
    const custom = this.state.customization;
    return custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.state.customizationState?.full,
      onChange: this._changeCustomValue(CustomizationType.FULL),
    });
  }

  private renderCustomizationDialogHeader() {
    return (
      <div className={css.DialogTitleWrapper}>
        <IconButton aria-label="close" onClick={this.toggleFullCustomizationDialog} className={css.DialogClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="span" className={css.DialogTitle}>
          Customization
        </Typography>
      </div>
    );
  }

  private renderFullCustomizationButton() {
    if (!this.hasFullCustomization()) {
      return null;
    }
    return (
      <IconButton aria-label="Customize game" onClick={this.toggleFullCustomizationDialog}>
        <SettingsIcon style={{ color: this.state.customizationState?.full ? '#3f51b5' : undefined }} />
      </IconButton>
    );
  }

  toggleFullCustomizationDialog = () => {
    this.setState({ showCustomizationDialog: !this.state.showCustomizationDialog });
  };

  private renderQuickCustomization() {
    const custom = this.state.customization;
    if (!custom || !custom.renderQuick) {
      return null;
    }
    return custom.renderQuick({
      mode: this.props.info.mode,
      currentValue: this.state.customizationState?.quick,
      onChange: this._changeCustomValue(CustomizationType.QUICK),
    });
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
    const customizationState = this.state.customizationState || {};
    if (customizationType == CustomizationType.QUICK) {
      customizationState.quick = value;
    } else if (customizationType == CustomizationType.FULL) {
      customizationState.full = value;
    }
    this.props.settingsService.setGameSetting('customization', this.props.gameDef.code, customizationState);
    this.setState({ customizationState });
  };
}

export const GameModePickerCard = withSettingsService(GameModePickerCardInternal);
