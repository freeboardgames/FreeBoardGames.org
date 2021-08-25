import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './definitions';
import { IGameArgs } from 'gamesShared/definitions/game';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  hintKey: string | null;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} gameOver={null}>
        {JSON.stringify(this.props.G)}
      </GameLayout>
    );
  }
}
