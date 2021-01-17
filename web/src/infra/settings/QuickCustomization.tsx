import React from 'react';
import { GameCustomization, GameCustomizationState, CustomizationType } from 'gamesShared/definitions/customization';
import { IGameModeInfo } from 'gamesShared/definitions/mode';

interface QuickCustomizationProps {
  info: IGameModeInfo;
  customization: GameCustomization | null;
  customizationState: GameCustomizationState;
  changeCustomValue: (customizationType: CustomizationType) => (value?: unknown) => void;
}

export class QuickCustomization extends React.Component<QuickCustomizationProps, {}> {
  render() {
    const custom = this.props.customization;
    if (!custom || !custom.renderQuick) {
      return null;
    }
    return custom.renderQuick({
      mode: this.props.info.mode,
      currentValue: this.props.customizationState?.quick,
      onChange: this.props.changeCustomValue(CustomizationType.QUICK),
    });
  }
}
