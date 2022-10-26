import * as React from 'react';
import ACardTable from './ACardTable';
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
    return (
      <GameLayout gameArgs={this.props.gameArgs} maxWidth={'700px'}>
        <ACardTable G={this.props.G} ctx={this.props.ctx} moves={this.props.moves} playerID={this.props.playerID} />
      </GameLayout>
    );
  }
}
