import React from 'react';
import {
  GameCustomization,
  FullGameCustomizationState,
  CustomizationType,
} from 'gamesShared/definitions/customization';
import { IGameModeInfo } from 'gamesShared/definitions/mode';

interface QuickCustomizationProps {
  info: IGameModeInfo;
  customization: GameCustomization | null;
  customizationState: FullGameCustomizationState;
  changeCustomValue: (customizationType: CustomizationType) => (value?: unknown) => void;
}

export class QuickCustomization extends React.Component<QuickCustomizationProps, {}> {
  render() {
    const custom = this.props.customization;
    if (!custom || !custom.renderQuick) {
      return null;
    }
    const mode = this.props.info.mode;
    return custom.renderQuick({
      mode,
      currentValue: this.props.customizationState[mode]?.quick,
      onChange: this.props.changeCustomValue(CustomizationType.QUICK),
    });
  }
}
