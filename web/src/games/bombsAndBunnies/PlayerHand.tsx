import * as React from 'react';
<<<<<<< HEAD

import { BunnyCardComponent, BombCardComponent, CardStyle } from './CardComponent';
=======
import IPlayer from './player';

import { BunnyCardComponent, BombCardComponent } from './CardComponent';
>>>>>>> upstream/master

import css from './PlayerHand.css';
import { CardType } from './cardType';

export interface IPlayerHandProps {
<<<<<<< HEAD
  playerId: string;
  hand: CardType[];
  cardStyle: CardStyle;
=======
  playerIndex: number;
  player: IPlayer;
>>>>>>> upstream/master
  selectCard?: (handIndex: number) => void;
}

export class PlayerHand extends React.Component<IPlayerHandProps, {}> {
<<<<<<< HEAD
=======
  _selectCard = (handIndex: number) => {
    if (!this.props.selectCard) {
      return;
    }

    this.props.selectCard(handIndex);
  };

>>>>>>> upstream/master
  render() {
    return <div className={css.playerHand}>{this.renderCards()}</div>;
  }

  renderCards() {
<<<<<<< HEAD
    if (this.props.hand.length == 0) {
      return <div className={css.title}>No Cards left...</div>;
    }

    const w: number = this.props.hand.length * 40 + 80;
=======
    if (this.props.player.hand.length == 0) {
      return <div className={css.title}>No Cards left...</div>;
    }

    const w: number = this.props.player.hand.length * 40 + 80;
>>>>>>> upstream/master

    return (
      <div className={css.cards} style={{ width: w }}>
        {this.renderHand()}
      </div>
    );
  }

  renderHand() {
<<<<<<< HEAD
    return [...this.props.hand]
      .sort((a, b) => a - b)
      .map((card: CardType, index: number) => this.renderCard(card, index, this.props.hand.length));
=======
    return [...this.props.player.hand]
      .sort((a, b) => a - b)
      .map((card: CardType, index: number) => this.renderCard(card, index, this.props.player.hand.length));
>>>>>>> upstream/master
  }

  renderCard(card: CardType, index: number, count: number) {
    const rot = -((count * 3) / 2) + (index * (count * 3)) / (count - 1);
    const y = Math.abs(index - (count - 1) / 2) * (count * 3);
    const styles = {
      transform: `rotate(${rot}deg) translateY(${y}px)`,
      transformOrigin: `bottom center`,
      width: '407px',
    };

    if (card === CardType.Bunny) {
      return (
        <div className={css.cardContainer} key={index}>
          <div style={styles}>
            <BunnyCardComponent
<<<<<<< HEAD
              style={this.props.cardStyle}
              click={this.props.selectCard ? () => this.props.selectCard(index) : null}
=======
              click={() => this._selectCard(index)}
              selectable={this.props.selectCard ? true : false}
              //selected={isSelected}
              card={card}
>>>>>>> upstream/master
            />
          </div>
        </div>
      );
    }

    return (
      <div className={css.cardContainer} key={index}>
        <div style={styles}>
          <BombCardComponent
<<<<<<< HEAD
            style={this.props.cardStyle}
            click={this.props.selectCard ? () => this.props.selectCard(index) : null}
=======
            click={() => this._selectCard(index)}
            selectable={this.props.selectCard ? true : false}
            //selected={isSelected}
            card={card}
>>>>>>> upstream/master
          />
        </div>
      </div>
    );
  }
}
