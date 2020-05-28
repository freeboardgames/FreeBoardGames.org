import * as React from 'react';
import ICard from './card';
import { BuildingCardComponent, MoneyCardComponent } from './CardComponent';
import css from './DeckComponent.css';

export interface IDeckProps {
  cards: ICard[];
}

export class DeckComponent extends React.Component<IDeckProps, {}> {
  render() {
    return (
        <div className={css.deck}>
            {this.renderCards()}
        </div>
    )
  }

  renderCards() {
    return [...this.props.cards]
      .map((card: any, index:number) => {
        const ComponentTag:any = (card.building) ? BuildingCardComponent : MoneyCardComponent;
        
        return (
          <div className={css.cardContainer} key={card.number}>
            <ComponentTag
              card={card}
            />
          </div>
        );
      });
  }
}
