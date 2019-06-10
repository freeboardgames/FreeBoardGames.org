import * as React from 'react';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, getCards, getAllowedDeck } from './game';
import { CardComponent } from './CardComponent';

interface IDecksProps {
  G: IG;
  ctx: IGameCtx;
  playerID: string;
  selectDeck: (index: number) => void;
}

export class Decks extends React.Component<IDecksProps, {}> {
  _selectDeck = (i: number) => () => this.props.selectDeck(i);

  render() {
    return (
      <div>
        {this.props.G.decks.map((deck, i) => (
          <div
            className="DeckRow"
            key={i}
            onClick={this._selectDeck(i)}
            style={{
              marginBottom: '4px',
              opacity: this.getOpacity(i),
            }}
          >
            {deck.map(card => (
              <div key={card.number}>
                <CardComponent card={card} />
              </div>
            ))}
            <div style={{ clear: 'both' }} />
          </div>
        ))}
      </div>
    );
  }

  getOpacity(id: number): number {
    if (
      this.props.ctx.phase === 'CARD_SELECT' ||
      !this.props.ctx.actionPlayers.some(player => player === this.props.playerID)
    ) {
      return 1;
    }

    const { card, lastCards } = getCards(this.props.G, this.props.playerID);
    if (card.number < lastCards[0].number) {
      return 1;
    } else {
      if (getAllowedDeck(this.props.G, card) === id) {
        return 1;
      }
    }

    return 0.2;
  }
}
