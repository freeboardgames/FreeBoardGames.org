import * as React from 'react';
import ICard from './card';
import { MoneyCardComponent, BuildingCardComponent } from './CardComponent';
import { DeckComponent } from './DeckComponent';

import css from './Tableau.css';

export interface ITableauProps {
    drawFrom: ICard[],
    cardsontable: ICard[],
    numPlayers: number;
    playerID: string;
}

export class Tableau extends React.Component<ITableauProps, {}> {
    render() {
        return (
            <div className={css.tableau}>
                {this.getDeck()}
                <div className={css.cards}>
                    {this.getCardsOnTable()}
                </div>
            </div>
        );
    }

  getDeck(){
    return (
        <DeckComponent cards={this.props.drawFrom} numCardsPerRound={this.props.numPlayers} />
    )
  }

  getCardsOnTable() {
    return [...this.props.cardsontable]
      .map((card: any) => {
        const ComponentTag:any = (card.building) ? BuildingCardComponent : MoneyCardComponent;
        
        return (
          <div className={css.cardContainer} key={card.number}>
            <ComponentTag
              card={card}
            />
          </div>
        );
      });
  };
}
