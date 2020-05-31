import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IG, Phases } from './game';
import { MoneyCardComponent, BuildingCardComponent } from './CardComponent';
import { DeckComponent } from './DeckComponent';

import css from './tableau.css';

export interface ITableauProps {
    G: IG;
    ctx: Ctx;
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
    if (this.props.ctx.phase == Phases.auction){
      return (
        <DeckComponent cards={this.props.G.buildings} numCardsPerRound={this.props.ctx.numPlayers} />
      )
    } else if (this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)){
      return (
        <DeckComponent cards={this.props.G.checks} numCardsPerRound={this.props.ctx.numPlayers} />
      )
    }
  }

  getCardsOnTable() {
    return [...this.props.G.cardsontable]
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
  };
}
