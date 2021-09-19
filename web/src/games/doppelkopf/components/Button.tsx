import * as React from 'react';

import css from './Button.module.css';

export function Button(props: {
  text: JSX.Element | string;
  red?: boolean;
  dirleft?: boolean;
  below?: boolean;
  click?: () => void;
}) {
  return (
    <div
      className={[
        css.speechBubble,
        props.red ? css.red : '',
        props.dirleft ? css.left : css.right,
        props.below ? css.below : '',
        props.click ? '' : css.inactive,
      ].join(' ')}
      onClick={props.click ? () => props.click() : null}
    >
      {props.text}
    </div>
  );
}
