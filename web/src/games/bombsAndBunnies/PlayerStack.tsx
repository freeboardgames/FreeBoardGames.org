import * as React from 'react';

import css from './PlayerStack.css';
import { FaceDownCardComponent, EmptyCardComponent, CardStyle } from './CardComponent';

export interface IPlayerStackProps {
  playerId: string;
  stackSize: number;
  revealCard?: (playerId: string) => void;
  cardStyle: CardStyle;
}

export class PlayerStack extends React.Component<IPlayerStackProps, {}> {
  _revealCard = () => {
    if (!this.props.revealCard) {
      return;
    }

    this.props.revealCard(this.props.playerId);
  };

  render() {
    var className = `${css.playerStack} ${this.props.revealCard ? css.active : ''}`;

    return (
      <div className={className} onClick={() => this._revealCard()}>
        {this.renderCount()}
        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    if (this.props.stackSize === 0) {
      return (
        <div className={css.cardContainer}>
          <EmptyCardComponent></EmptyCardComponent>
        </div>
      );
    }

    return new Array(this.props.stackSize).fill(0).map((_, i) => {
      return (
        <div className={css.cardContainer} key={i} style={{ margin: -i }}>
          <FaceDownCardComponent style={this.props.cardStyle}></FaceDownCardComponent>
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
