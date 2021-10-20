import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import cards from './cards';

const HAND_SIZE = 1;
interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  drawCard(id) {
    this.props.moves.clickCell(id);
  }

  triggerBattle() {
    this.props.moves.battle();
  }

  getCard(id: number) {
    if (this.props.G.players[id].hand.length >= HAND_SIZE) {
      return this.props.G.players[id].hand[0].image;
    }
    return null;
  }
  getWarCard(id: number, card: number) {
    if (this.props.G.players[id].hand.length > HAND_SIZE) {
      return this.props.G.players[id].hand[card].image;
    }
    return null;
  }
  render() {
    const cellStyle = {
      padding: '10px',
      width: '140px',
      height: '190px',
    };

    const messageRowStyle = {};

    const cardStyle = {
      width: '100px',
      height: 'auto',
    };
    const rowStyle = {
      align: 'left',
    };

    const boardStyle = {
      width: '60%',
    };
    let tbody = [];
    tbody.push(
      <tr style={messageRowStyle}>
        <td key="message">
          <button onClick={() => this.triggerBattle()}> Next Phase </button>
        </td>
      </tr>,
    );
    tbody.push(
      <tr style={rowStyle} id="p1Row">
        <td style={cellStyle} key="p1DrawPile" onClick={() => this.drawCard(0)}>
          {' '}
          <img style={cardStyle} src={cards.cardBack_blue1}></img>
        </td>
        <td style={cellStyle} key="p1">
          <img style={cardStyle} src={cards[this.getCard(0)]}></img>
        </td>
        <td style={cellStyle} key="p1war1">
          <img style={cardStyle} src={cards[this.getWarCard(0, 1)]}></img>
        </td>
        <td style={cellStyle} key="p1war2">
          <img style={cardStyle} src={cards[this.getWarCard(0, 2)]}></img>
        </td>
      </tr>,
    );
    tbody.push(
      <tr style={rowStyle} id="p2Row">
        <td style={cellStyle} key="p2DrawPile" onClick={() => this.drawCard(1)}>
          {' '}
          <img style={cardStyle} src={cards.cardBack_blue1}></img>
        </td>
        <td style={cellStyle} key="p2">
          <img style={cardStyle} src={cards[this.getCard(1)]}></img>
        </td>
        <td style={cellStyle} key="p2war1">
          <img style={cardStyle} src={cards[this.getWarCard(1, 1)]}></img>
        </td>
        <td style={cellStyle} key="p2war2">
          <img style={cardStyle} src={cards[this.getWarCard(1, 2)]}></img>
        </td>
      </tr>,
    );
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <table style={boardStyle} id="board">
          <tbody id="body">{tbody}</tbody>
        </table>
      </GameLayout>
    );
  }
}
