import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './BetButton.module.css';

interface IBetButtonProps {
  click?: () => void;
  active?: boolean;
  text?: string;
  activeText?: string;
  left?: boolean;
}

function BaseButton(
  { click, active, text, activeText, left }: IBetButtonProps = { text: '', activeText: '', left: false },
) {
  const availableClass = !!click ? css.available : '';
  const activeClass = !!active ? css.active : '';
  const direction = left ? css.left : css.right;
  const classNames = `${css.speechBubble} ${availableClass} ${activeClass} ${direction}`;
  const { translate } = useCurrentGameTranslation();

  let button_text = text;
  if (active && activeText) {
    button_text = activeText;
  }

  return (
    <button data-testid="base-button" className={classNames} onClick={click}>
      {translate(button_text)}
    </button>
  );
}

export function BetButton(props: IBetButtonProps) {
  return <BaseButton {...props} text="bet_button.bet" activeText="bet_button.cancel" left={true} />;
}

export function SkipButton(props: IBetButtonProps) {
  return <BaseButton {...props} text="bet_button.skip_button" />;
}
