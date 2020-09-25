import * as React from 'react';
import IPlayer from './player';

import { FlowerCardComponent, SkullCardComponent } from './CardComponent';

import css from './PlayerHand.css';
import { Token } from './Token';

export interface IPlayerHandProps {
  playerIndex: number;
  player: IPlayer;
  selectCard?: (handIndex: number) => void;
}

export class PlayerHand extends React.Component<IPlayerHandProps, {}> {
  _selectCard = (handIndex: number) => {
    if (!this.props.selectCard) {
      return;
    }

    this.props.selectCard(handIndex);
  };

  render() {
    return <div className={css.playerHand}>{this.renderCards()}</div>;
  }

  renderCards() {
    if (this.props.player.hand.length == 0) {
      return <div className={css.title}>No Tokens left...</div>;
    }

    const w: number = this.props.player.hand.length * 40 + 80;

    return (
      <div className={css.cards} style={{ width: w }}>
        {this.renderHand()}
      </div>
    );
  }

  renderHand() {
    return [...this.props.player.hand]
      .sort((a, b) => a - b)
      .map((card: Token, index: number) => this.renderCard(card, index, this.props.player.hand.length));
  }

  renderCard(card: Token, index: number, count: number) {
    const rot = -((count * 3) / 2) + (index * (count * 3)) / (count - 1);
    const y = Math.abs(index - (count - 1) / 2) * (count * 3);
    const styles = {
      transform: `rotate(${rot}deg) translateY(${y}px)`,
      transformOrigin: `bottom center`,
      width: '407px',
    };

    if (card === Token.Flower) {
      return (
        <div className={css.cardContainer} key={index}>
          <div style={styles}>
            <FlowerCardComponent
              click={() => this._selectCard(index)}
              selectable={this.props.selectCard ? true : false}
              //selected={isSelected}
              card={card}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={css.cardContainer} key={index}>
        <div style={styles}>
          <SkullCardComponent
            click={() => this._selectCard(index)}
            selectable={this.props.selectCard ? true : false}
            //selected={isSelected}
            card={card}
          />
        </div>
      </div>
    );
  }
}
