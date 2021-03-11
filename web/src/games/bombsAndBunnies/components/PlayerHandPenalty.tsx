import * as React from 'react';

import { FaceDownCardComponent, BunnyCardComponent, BombCardComponent } from './CardComponent';
import { CardType, CardStyle } from './shared/interfaces';

import css from './PlayerHandPenalty.module.css';

export interface IPlayerHandPenaltyProps {
  playerId: string;
  targetPlayerId: string;
  hand: CardType[];
  selectCard?: (targetPlayerId: string, handIndex: number) => void;
  cardStyle: CardStyle;
}

export class PlayerHandPenalty extends React.Component<IPlayerHandPenaltyProps, {}> {
  render() {
    return <div className={css.playerHand}>{this.renderCards()}</div>;
  }

  renderCards() {
    if (this.props.hand.length == 0) {
      return <div className={css.title}>No Cards left...</div>;
    }

    return <div className={css.cards}>{this.renderHand()}</div>;
  }

  renderHand() {
    if (this.props.playerId === this.props.targetPlayerId) {
      return this.props.hand.map((c: CardType, index: number) => this.renderOwnCard(c, index));
    }

    return this.getShuffledHandIndexes(this.props.hand).map((shuffledIndex) =>
      this.renderOtherPlayersCard(shuffledIndex),
    );
  }

  renderOwnCard(card: CardType, index: number) {
    if (card === CardType.Bunny) {
      return (
        <div className={css.cardContainer} key={index}>
          <div>
            <BunnyCardComponent
              style={this.props.cardStyle}
              click={this.props.selectCard ? () => this.props.selectCard(this.props.targetPlayerId, index) : null}
            />
          </div>
        </div>
      );
    }

    if (card === CardType.Bomb) {
      return (
        <div className={css.cardContainer} key={index}>
          <div>
            <BombCardComponent
              style={this.props.cardStyle}
              click={this.props.selectCard ? () => this.props.selectCard(this.props.targetPlayerId, index) : null}
            />
          </div>
        </div>
      );
    }
  }

  renderOtherPlayersCard(index: number) {
    return (
      <div className={css.cardContainer} key={index}>
        <div>
          <FaceDownCardComponent
            style={this.props.cardStyle}
            click={this.props.selectCard ? () => this.props.selectCard(this.props.targetPlayerId, index) : null}
          />
        </div>
      </div>
    );
  }

  getShuffledHandIndexes(hand: CardType[]): number[] {
    const indexes = hand.map((_, index) => index);
    let shuffledIndexes = [];

    while (indexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * indexes.length);
      shuffledIndexes.push(indexes.splice(randomIndex, 1));
    }

    return shuffledIndexes;
  }
}
