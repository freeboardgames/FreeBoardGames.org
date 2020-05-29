import * as React from 'react';
import ICard from './card';
import { EmptyCardComponent, BuildingCardComponent, MoneyCardComponent } from './CardComponent';
import css from './DeckComponent.css';

export interface IDeckProps {
  cards: ICard[];
  numCardsPerRound?: number;
}

export class DeckComponent extends React.Component<IDeckProps, {}> {
  render() {
    const emptycard = {
      number: 0,
      value: 0,
      showing: false,
    }

    return (
        <div className={css.deck}>
          <div className={css.cardContainer} >
            <EmptyCardComponent card={emptycard} />
          </div>
          {this.renderCards()}
          {this.renderCount()}
        </div>
    )
  }

  renderCards() {
    return [...this.props.cards]
      .map((card: any, index:number) => {
        const ComponentTag:any = (card.building) ? BuildingCardComponent : MoneyCardComponent;
        
        return (
          <div
            className={css.cardContainer}
            key={card.number}
            style={{ margin: -index }}
            >
            <ComponentTag
              card={card}
            />
          </div>
        );
      });
  }

  renderCount() {
    if (this.props.numCardsPerRound <= 0) return;
    const roundsRemaining = this.props.cards.length / this.props.numCardsPerRound;

    if (roundsRemaining <= 0) return;

    return (
      <div className={css.cardCountContainer}>
        <div className={css.title}>Rounds Remaining</div>
        <div className={css.roundsRemaining}>{roundsRemaining}</div>
      </div>
    );
  }
}
