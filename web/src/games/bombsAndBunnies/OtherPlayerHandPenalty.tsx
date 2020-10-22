import * as React from 'react';

import { FaceDownCardComponent } from './CardComponent';

import css from './OtherPlayerHandPenalty.css';

export interface IOtherPlayerHandPenaltyProps {
  playerId: string;
  handSize: number;
  selectCard?: (handIndex: number) => void;
}

export class OtherPlayerHandPenalty extends React.Component<IOtherPlayerHandPenaltyProps, {}> {
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
    if (this.props.handSize == 0) {
      return <div className={css.title}>No Cards left...</div>;
    }

    return <div className={css.cards}>{this.renderHand()}</div>;
  }

  renderHand() {
    return new Array(this.props.handSize).fill(0).map((_, index: number) => this.renderCard(index));
  }

  renderCard(index: number) {
    return (
      <div className={css.cardContainer} key={index}>
        <div>
          <FaceDownCardComponent
            click={() => this._selectCard(index)}
            selectable={this.props.selectCard ? true : false}
          />
        </div>
      </div>
    );
  }
}
