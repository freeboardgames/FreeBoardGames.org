import * as React from 'react';

import css from './PlayerStack.css';
import { FaceDownCardComponent, EmptyCardComponent } from './CardComponent';
import { CardType } from './cardType';

export interface IPlayerStackProps {
  playerIndex: number;
  stackSize: number;
  revealCard?: (playerIndex: number) => void;
}

export class PlayerStack extends React.Component<IPlayerStackProps, {}> {
  _revealCard = () => {
    if (!this.props.revealCard) {
      return;
    }

    this.props.revealCard(this.props.playerIndex);
  };

  render() {
    return (
      <div className={css.playerStack} onClick={() => this._revealCard()}>
        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    if (this.props.stackSize === 0) {
      return (
        <div className={css.cardContainer}>
          <EmptyCardComponent card={CardType.Bunny}></EmptyCardComponent>
        </div>
      );
    }

    return new Array(this.props.stackSize).fill(0).map((_, i) => {
      return (
        <div className={css.cardContainer} key={i} style={{ margin: -i }}>
          <FaceDownCardComponent card={CardType.Bunny}></FaceDownCardComponent>
        </div>
      );
    });
  }
}
