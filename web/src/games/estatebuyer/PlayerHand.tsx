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
            .map((card: any, index: number) => 
              this.renderCard(card, index, this.props.G.players[playerToShow].buildings.length)
            )}
        </div>
      </div>
    );
  }

  renderCard(card: any, index: number, count: number) {
    const rot = -(count * 3 / 2) + (index * (count * 3) / (count-1));
    const y = Math.abs(index - count/2) * (count * 3);
    console.log("Rotate: ", rot);
    const styles = { 
        transform: `rotate(${rot}deg) translateY(${y}px)`,
        transformOrigin: `50% 50%`
    };
    return (
      <div
        className={css.cardContainer}
        key={index}
        >
          <div style={styles}>
            <BuildingCardComponent
              click={() => this._selectCard(card.number)}
              selectable={this.props.selectCard ? true : false}
              card={card} />
          </div>
      </div>
    )
  }
}
