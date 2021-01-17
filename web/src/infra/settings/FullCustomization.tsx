import React from 'react';
import { GameCustomization, GameCustomizationState, CustomizationType } from 'gamesShared/definitions/customization';
import { IGameModeInfo } from 'gamesShared/definitions/mode';
import AlertLayer from '../common/components/alert/AlertLayer';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Card from '@material-ui/core/Card';
import css from './FullCustomization.module.css';
import Typography from '@material-ui/core/Typography';

interface FullCustomizationProps {
  info: IGameModeInfo;
  customization: GameCustomization | null;
  customizationState: GameCustomizationState;
  changeCustomValue: (customizationType: CustomizationType) => (value?: unknown) => void;
}

interface FullCustomizationState {
  showCustomizationDialog: boolean;
}

export class FullCustomization extends React.Component<FullCustomizationProps, FullCustomizationState> {
  state = {
    showCustomizationDialog: false,
  };

  render() {
    return (
      <>
        {this.renderCustomizationDialog()}
        {this.renderFullCustomizationButton()}
      </>
    );
  }

  private hasFullCustomization() {
    const custom = this.props.customization;
    if (!custom || !custom.renderFull) {
      return false;
    }
    const fullCustom = custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.props.customizationState?.quick,
      onChange: () => {},
    });
    return fullCustom !== null;
  }

  private renderFullCustomizationButton() {
    if (!this.hasFullCustomization()) {
      return null;
    }
    return (
      <IconButton aria-label="Customize game" onClick={this.toggleFullCustomizationDialog}>
        <SettingsIcon style={{ color: this.props.customizationState?.full ? '#3f51b5' : undefined }} />
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
    const custom = this.props.customization;
    return custom.renderFull({
      mode: this.props.info.mode,
      currentValue: this.props.customizationState?.full,
      onChange: this.props.changeCustomValue(CustomizationType.FULL),
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
}
