import * as React from 'react';

import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';

import View, { IViewProps } from './components/View';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

export interface IBoardState {
  currentColourId: number | null;
}
export class BoardInternal extends React.Component<IViewProps & IBoardInnerProps, IBoardState> {
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
      return this.props.translate('game_over.you_won');
    } else if (ctx && ctx.gameover && ctx.gameover.loose) {
      return this.props.translate('game_over.you_lost');
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

const enhance = compose<IViewProps & IBoardInnerProps, IBoardState>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
