import * as React from 'react';

import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import View, { IViewProps } from './components/View';

export interface IBoardState {
  currentColourId: number | null;
}
export class Board extends React.Component<IViewProps, IBoardState> {
  constructor(props) {
    super(props);

    this.state = {
      currentColourId: null,
    };
  }

  selectColour = (colourId: number): void => {
    this.setState({ currentColourId: colourId });
  };

  getGameOverStatus = (ctx: Ctx) => {
    if (ctx && ctx.gameover && ctx.gameover.winner) {
      return 'You win';
    } else if (ctx && ctx.gameover && ctx.gameover.loose) {
      return 'You lost';
    }
  };

  render() {
    const { ctx, G, gameArgs, moves } = this.props;
    const gameOverBoard = (
      <View
        G={G}
        ctx={ctx}
        moves={moves}
        selectColour={this.selectColour}
        currentColourId={this.state.currentColourId}
      />
    );

    return (
      <GameLayout gameOver={this.getGameOverStatus(ctx)} extraCardContent={gameOverBoard} gameArgs={gameArgs}>
        <View
          G={G}
          ctx={ctx}
          moves={moves}
          selectColour={this.selectColour}
          currentColourId={this.state.currentColourId}
        />
      </GameLayout>
    );
  }
}
