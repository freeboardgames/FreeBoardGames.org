import * as React from 'react';
import CardContainer from './CardContainer';
import CardTable from './CardTable';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  render() {
    let currIdx = parseInt(this.props.ctx.currentPlayer);
    let playerName = this.props.gameArgs.players[currIdx].name;
    let turn = this.props.G.deck.length === 1 ? { turn: true } : { private: true };

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <CardContainer name="South" cards={this.props.G.hands.south.held} />
        <CardTable G={this.props.G} />
        <CardContainer name="Deck" cards={this.props.G.deck} {...turn} deck />
        <CardContainer name="North" cards={this.props.G.hands.north.held} />

        <h2>{playerName}</h2>
      </GameLayout>
    );
  }
}
