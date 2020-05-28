import * as React from 'react';
import { IG } from './game';
import { BuildingCardComponent } from './CardComponent';

import css from './PlayerHand.css';

export interface IPlayerHandProps {
  G: IG;
  playerID: string;
  selectCard?: (index: number) => void;
}

export class PlayerHand extends React.Component<IPlayerHandProps, {}> {
  _selectCard = (i: number) => this.props.selectCard(i);

  render() {
    const playerToShow:any = this.props.playerID;
    if (playerToShow === null){
      return null;
    }

    if (this.props.G.players[playerToShow].buildings.length == 0){
      return null;
    }

    return (
      <div className={css.playerHand}>
        <div className={css.title}>Your Properties</div>
        <div
          className={css.cards}
        >
          {[...this.props.G.players[playerToShow].buildings]
            .sort((a, b) => (a.value - b.value))
            .map((card: any, index: number) => (
            <div className={css.cardContainer} key={index} >
              <BuildingCardComponent
                click={() => this._selectCard(card.number)}
                selectable={this.props.selectCard ? true : false}
                card={card} />
            </div>
                
          ))}
        </div>
      </div>
    );
  }
}
