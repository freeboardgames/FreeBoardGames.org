import * as React from 'react';
import ICard from './card';
import css from './CardComponent.css';

export interface ICardProps {
  card: ICard;
  selectable?: boolean;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  front:string = css.MoneyCard;
  back:string = css.MoneyCardHidden;

  render() {
    return (
      <div
        className={
          [
            css.Card,
            this.front,
            this.props.selectable ? css.Selectable : '',
            (this.props.card.showing ? css[("CardFront_"+this.props.card.value)] :  this.back)
          ].join(' ')
        }
        onClick={this.props.click}
      >
      </div>
    );
  }
}

export class MoneyCardComponent extends CardComponent {
  front:string = css.MoneyCard;
  back:string = css.MoneyCardHidden;
}

export class BuildingCardComponent extends CardComponent {
  front:string = css.PropertyCard;
  back:string = css.PropertyCardHidden;
}