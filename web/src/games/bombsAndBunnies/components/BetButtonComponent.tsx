import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './BetButtonComponent.module.css';

export interface IBetButtonProps {
  click: () => void;
  bet: number;
}

export function BetButtonComponent({ bet, click }: IBetButtonProps) {
  const { translate } = useCurrentGameTranslation();
  return (
    <button className={css.betButton} onClick={click}>
      {translate('bet_button_component.bet', { bet })}
    </button>
  );
}
