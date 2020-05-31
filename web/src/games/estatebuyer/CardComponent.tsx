import * as React from 'react';
import ICard from './card';
import css from './CardComponent.css';

export interface ICardProps {
  card: ICard;
  selectable?: boolean;
  selected?: boolean;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  front:string = css.MoneyCard;

  render() {
    return (
      <div
        className={
          [
            css.Card,
            this.front,
            this.props.selectable ? css.Selectable : '',
            this.props.selected ? css.Selected : '',
            (this.props.card.showing ? css[("CardFront_"+this.props.card.value)] : css.hidden)
          ].join(' ')
        }
        onClick={this.props.click}
      >
      </div>
    );
  }
}

export class EmptyCardComponent extends CardComponent {
  front:string = css.EmptyCard;
}

export class MoneyCardComponent extends CardComponent {
  front:string = css.MoneyCard;
}

export class BuildingCardComponent extends CardComponent {
  front:string = css.PropertyCard;
}