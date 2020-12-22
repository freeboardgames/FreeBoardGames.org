import * as React from 'react';
import css from './Board.module.css';

import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { grey } from '@material-ui/core/colors';
import { IG, IMoves } from './service';

import Attempt from './components/Attempt';
import ColourCode from './components/ColourButton';
import ColourButton from './components/ColourCode';
import Secret from './components/Secret';

interface IBoardProps {
  G: IG;
  ctx?: Ctx;
  moves: IMoves;
  playerID?: string;
  gameArgs?: IGameArgs;
  selectColour: (colourId: number) => void;
  currentColourId?: number | null;
}

interface IBoardState {
  currentColourId: number | null;
}

const BoardBullsAndCows = ({ G, ctx, moves, selectColour, currentColourId }: IBoardProps) => (
  <div className={css.board} style={{ backgroundColor: grey[400] }}>
    <div className={css.attempts}>
      {ctx.gameover && <Secret secret={G.secret} />}
      {G.attempts.map((attempt, key) => (
        <Attempt key={key} attempt={attempt} index={String(key + 1).padStart(2, '0')} />
      )).reverse()}
      <div className={css.guess}>
        {G.current.map((currentValue, position) => (
          <ColourButton key={position} colour={currentValue} currentColourId={currentColourId} position={position} onClick={moves.setColourInPosition} />
        ))}
        <button className={css.guessBtn} onClick={() => moves.check()}>
          GUESS
        </button>
      </div>
    </div>
    <div className={css.colours}>
      {G.colours.map((colour) => (
        <ColourCode key={colour.id} currentColourId={currentColourId} colour={colour} onClick={selectColour} />
      ))}
    </div>
  </div>
);

export class Board extends React.Component<IBoardProps, IBoardState> {
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
      <BoardBullsAndCows
        G={G}
        ctx={ctx}
        moves={moves}
        selectColour={this.selectColour}
        currentColourId={this.state.currentColourId}
      />
    );

    return (
      <GameLayout gameOver={this.getGameOverStatus(ctx)} extraCardContent={gameOverBoard} gameArgs={gameArgs}>
        <BoardBullsAndCows
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
