import React from 'react';
import {
  GameCustomization,
  FullGameCustomizationState,
  CustomizationType,
  GameCustomizationState,
} from 'gamesShared/definitions/customization';
import { IGameModeInfo } from 'gamesShared/definitions/mode';
import AlertLayer from '../common/components/alert/AlertLayer';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Card from '@material-ui/core/Card';
import css from './CustomizationBar.module.css';
import Typography from '@material-ui/core/Typography';
import { withSettingsService, SettingsService } from 'infra/settings/SettingsService';
import { IGameDef } from 'gamesShared/definitions/game';

interface CustomizationBarProps {
  gameDef: IGameDef;
  info: IGameModeInfo;
  settingsService: SettingsService;
}

interface CustomizationBarState {
  customization: GameCustomization | null;
  customizationState: FullGameCustomizationState;
  showCustomizationDialog: boolean;
}

export class CustomizationBarInternal extends React.Component<CustomizationBarProps, CustomizationBarState> {
  state = {
    showCustomizationDialog: false,
    customization: null,
    customizationState: {} as FullGameCustomizationState,
  };

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

  render() {
    return (
      <div className={css.BarWrapper}>
        {this.renderCustomizationDialog()}
        {this.renderQuickCustomization()}
        <div style={{ flex: 'grow' }}></div>
        {this.renderFullCustomizationButton()}
      </div>
    );
  }

  private renderQuickCustomization() {
    const custom = this.state.customization;
    if (!custom || !custom.renderQuick) {
      return null;
    }
    const mode = this.props.info.mode;
    return custom.renderQuick({
      mode,
      currentValue: (this.state.customizationState || {})[mode]?.quick,
      onChange: this._changeCustomValue(CustomizationType.QUICK),
    });
  }

  private hasFullCustomization() {
    const mode = this.props.info.mode;
    const custom = this.state.customization;
    if (!custom || !custom.renderFull) {
      return false;
    }
    const fullCustom = custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.state.customizationState[mode]?.quick,
      onChange: () => {},
    });
    return fullCustom !== null;
  }

  private renderFullCustomizationButton() {
    if (!this.hasFullCustomization()) {
      return null;
    }
    const mode = this.props.info.mode;
    return (
      <IconButton
        aria-label="Customize game"
        onClick={this.toggleFullCustomizationDialog}
        style={{ height: '36px', width: '36px', marginLeft: 'auto' }}
      >
        <SettingsIcon style={{ color: this.state.customizationState[mode]?.full ? '#3f51b5' : undefined }} />
      </IconButton>
    );
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
    const mode = this.props.info.mode;
    return custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.state.customizationState[mode]?.full,
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

  toggleFullCustomizationDialog = () => {
    this.setState({ showCustomizationDialog: !this.state.showCustomizationDialog });
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

export const CustomizationBar = withSettingsService(CustomizationBarInternal);
