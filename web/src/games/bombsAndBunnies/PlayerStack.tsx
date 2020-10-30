import * as React from 'react';

import css from './PlayerStack.css';
<<<<<<< HEAD
import { FaceDownCardComponent, EmptyCardComponent, CardStyle } from './CardComponent';

export interface IPlayerStackProps {
  playerId: string;
  stackSize: number;
  revealCard?: (playerId: string) => void;
  cardStyle: CardStyle;
=======
import { FaceDownCardComponent, EmptyCardComponent } from './CardComponent';
import { CardType } from './cardType';

export interface IPlayerStackProps {
  playerIndex: number;
  stackSize: number;
  revealCard?: (playerIndex: number) => void;
>>>>>>> upstream/master
}

export class PlayerStack extends React.Component<IPlayerStackProps, {}> {
  _revealCard = () => {
    if (!this.props.revealCard) {
      return;
    }

<<<<<<< HEAD
    this.props.revealCard(this.props.playerId);
  };

  render() {
    var className = `${css.playerStack} ${this.props.revealCard ? css.active : ''}`;

    return (
      <div className={className} onClick={() => this._revealCard()}>
=======
    this.props.revealCard(this.props.playerIndex);
  };

  render() {
    return (
      <div className={css.playerStack} onClick={() => this._revealCard()}>
>>>>>>> upstream/master
        {this.renderCount()}
        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    if (this.props.stackSize === 0) {
      return (
        <div className={css.cardContainer}>
<<<<<<< HEAD
          <EmptyCardComponent></EmptyCardComponent>
=======
          <EmptyCardComponent card={CardType.Bunny}></EmptyCardComponent>
>>>>>>> upstream/master
        </div>
      );
    }

    return new Array(this.props.stackSize).fill(0).map((_, i) => {
      return (
        <div className={css.cardContainer} key={i} style={{ margin: -i }}>
<<<<<<< HEAD
          <FaceDownCardComponent style={this.props.cardStyle}></FaceDownCardComponent>
=======
          <FaceDownCardComponent card={CardType.Bunny}></FaceDownCardComponent>
>>>>>>> upstream/master
        </div>
      );
    });
  }

  renderCount() {
    var stackSize = this.props.stackSize;
    if (stackSize <= 0) return;

    return (
      <div className={css.cardCountContainer}>
        <div className={css.count}>{stackSize}</div>
      </div>
    );
  }
}
