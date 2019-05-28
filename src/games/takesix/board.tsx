import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG } from './game';
import CardComponent from './CardComponent';

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  selectCard(id: number) {
    this.props.moves.selectCard(id);
  }

  selectDeck(id: number) {
    this.props.moves.selectDeck(id);
  }

  getOpacity(id: number): number {
    if (this.props.ctx.phase === 'CARD_SELECT') {
      return 1;
    }

    const lastCards = this.props.G.decks
      .map((deck) => deck[deck.length - 1])
      .sort((a, b) => a.number - b.number);
    const card = this.props.G.players[this.props.playerID as any].selectedCard;
    if (card.number < lastCards[0].number) {
      return 1;
    } else {
      const diffs: number[] = this.props.G.decks.map(
        (deck) => card.number - deck[deck.length - 1].number,
      );

      let min = Number.MAX_SAFE_INTEGER;
      let minIndex = 0;
      diffs.forEach((diff, index) => {
        if (diff > 0 && diff < min) {
          min = diff;
          minIndex = index;
        }
      });

      if (minIndex === id) {
        return 1;
      }
    }

    return 0.2;
  }

  _getStatus() {
    if (this.props.gameArgs && this.props.gameArgs.mode === GameMode.OnlineFriend) {
      if (this.props.ctx.actionPlayers.some(player => player === this.props.playerID)) {
        if (this.props.ctx.phase === 'CARD_SELECT') {
          return 'SELECT CARD';
        } else {
          return 'SELECT BOARD';
        }
      } else {
        return 'Waiting for opponent...';
      }
    }
  }

  _getGameOver() {
    if (this.props.ctx.gameover.winner !== undefined) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
      }
    } else {
      return 'draw';
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />
      );
    }

    if (this.props.playerID === null) {
      return (<GameLayout><div><svg /></div></GameLayout>);
    }

    return (
      <GameLayout>
        <h2 style={{ textAlign: 'center' }}>
          {this._getStatus()}
        </h2>
        <div>
          {this.props.G.decks.map((deck, i) => (
            <div
              key={i}
              onClick={this.selectDeck.bind(this, i)}
              style={{
                marginBottom: '10px',
                opacity: this.getOpacity(i),
              }}
            >
              {deck.map((card, j) => (
                <div key={j}>
                  <CardComponent card={card} />
                </div>
              ))}
              <div style={{ clear: 'both' }} />
            </div>
          ))}
        </div>
        <div
          style={{
            width: 400,
            height: 160,
            marginTop: '20px',
          }}
        >
          {this.props.G.players[this.props.playerID as any].cards.map(
            (card, index: number) => (
              <CardComponent
                key={card.number}
                click={this.selectCard.bind(this, index)}
                card={card}
              />
            ),
          )}
        </div>
        <div>
          Penalty points: {this.props.G.players[this.props.playerID as any].penaltyCards
            .map((card) => card.value)
            .reduce((a, b) => a + b, 0)}
        </div>
      </GameLayout>
    );
  }
}

export default Board;
