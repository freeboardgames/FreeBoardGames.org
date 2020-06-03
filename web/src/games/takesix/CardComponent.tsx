import * as React from 'react';
import Card from './card';
import css from './CardComponent.css';

export interface ICardProps {
  card: Card;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  render() {
    const { card } = this.props;
    const cardAsset = require(`./media/cards/${card.number}.png`);

    return (
      <div onClick={this.props.click} className={css.Card}>
        <img src={cardAsset} height={100} />
      </div>
    );
  }
}
