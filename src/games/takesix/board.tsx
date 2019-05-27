import * as React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { parenthesizedExpression } from '@babel/types';
import createMixins from '@material-ui/core/styles/createMixins';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
}

interface ICardProps {
  card: any;
  click?: any;
}

export class Card extends React.Component<ICardProps, {}> {
  render() {
    const values: any = {
      1: '#ffffff',
      2: '#3498db',
      3: '#f1c40f',
      5: '#e74c3c',
      7: '#8e44ad',
    };
    const style: any = {
      width: 80,
      height: 80,
      background: values[this.props.card.value],
      float: 'left',
      color: 'black',
    };

    return (
      <div
        onClick={this.props.click}
        style={style}
      >
        <div
          style={{
            textAlign: 'center',
            lineHeight: '20px',
          }}
        >
          {this.props.card.value}
        </div>
        <div
          style={{
            textAlign: 'center',
            lineHeight: '60px',
            verticalAlign: 'middle',
            fontSize: '3em',
          }}
        >
          {this.props.card.number}
        </div>
      </div>
    );
  }
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
      .map((deck: any) => deck[deck.length - 1])
      .sort((a: any, b: any) => a.number - b.number);
    const card = this.props.G.players[this.props.playerID].selectedCard;
    if (card.number < lastCards[0].number) {
      return 1;
    } else {
      const diffs: number[] = this.props.G.decks.map(
        (deck: any) => card.number - deck[deck.length - 1].number,
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

  render() {
    return (
      <GameLayout>
        <div>
          {this.props.G.decks.map((deck: any, i: number) => (
            <div
              key={i}
              onClick={this.selectDeck.bind(this, i)}
              style={{
                marginBottom: '10px',
                opacity: this.getOpacity(i),
              }}
            >
              {deck.map((card: any, j: number) => (
                <div key={j}>
                  <Card card={card} />
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
          {this.props.G.players[this.props.playerID].cards.map(
            (card: any, index: number) => (
              <Card
                key={card.number}
                click={this.selectCard.bind(this, index)}
                card={card}
              />
            ),
          )}
        </div>
        <div>
          Penalty points: {this.props.G.players[this.props.playerID].penaltyCards
            .map((card: any) => card.value)
            .reduce((a: any, b: any) => a + b, 0)}
        </div>
      </GameLayout>
    );
  }
}

export default Board;
