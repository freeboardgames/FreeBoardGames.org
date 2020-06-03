import * as React from 'react';
import Card from './card';
import css from './CardComponent.css';
import Typography from '@material-ui/core/Typography';

export interface ICardProps {
  card: Card;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  render() {
    const { card } = this.props;
    const values: any = {
      1: '#ffffff',
      2: '#3498db',
      3: '#f1c40f',
      5: '#e74c3c',
      7: '#8e44ad',
    };
    const cardAsset = require(`./media/cards/${card.number}.png`);

    return (
      <div
        onClick={this.props.click}
        className={css.Card}
      >
        <img src={cardAsset} height={105} style={{ objectFit: 'fill' }} />
      </div>
    );
  }
}
