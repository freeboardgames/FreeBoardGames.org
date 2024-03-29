import * as React from 'react';
import { ICard, Pattern } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './ButtonBar.module.css';

export function ButtonBar(props: {
  click: (() => void)[];
  texts?: (JSX.Element | string)[];
  cards?: ICard[];
  question?: string;
  noWrap?: boolean;
  below?: boolean;
  red?: boolean[];
  pattern?: Pattern;
}) {
  function renderButton(key: number, text: JSX.Element | string, red: boolean, click: () => void) {
    return (
      <div
        key={key}
        className={[css.button, red ? css.red : '', click ? '' : css.inactive].join(' ')}
        onClick={click ? () => click() : null}
      >
        {text}
      </div>
    );
  }

  function renderCard(key: number, card: ICard, click: () => void) {
    return (
      <div key={key} className={css.arrangeCard} onClick={click ? () => click() : null}>
        <div>
          <Card pattern={props.pattern} type={card} width={70} />
        </div>
      </div>
    );
  }

  let buttons = null;
  if (props.texts) {
    buttons = props.texts.map((text, i) => {
      return renderButton(i, text, props.red ? props.red[i] : false, props.click[i]);
    });
  } else if (props.cards) {
    buttons = props.cards.map((C, i) => renderCard(i, C, props.click[i]));
  }

  return (
    <div
      className={[
        css.buttonBar,
        props.below ? css.below : '',
        props.cards ? css.cards : '',
        props.noWrap ? css.nowrap : '',
      ].join(' ')}
    >
      {props.question ? <div className={css.question}>{props.question}</div> : null}
      {buttons}
    </div>
  );
}
