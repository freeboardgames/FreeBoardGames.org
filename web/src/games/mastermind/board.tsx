import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import {grey } from '@material-ui/core/colors';
import { IMAGES } from './images';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  currentColourId: number | null;
}
export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);

    this.state = {
      currentColourId: null,
    }
  }

  selectColour = (id: number) => {
    this.setState({ currentColourId: id });
  }

  getHintValue = (hint: number) => {
    if (hint === 1) {
      return '✓';
    } else if (hint === 0) {
      return 'X';
    } else { return '-'}
  }

  getGameOverStatus = (ctx: Ctx) => {
    if (ctx && ctx.gameover && ctx.gameover.winner) {
      return 'You win';
    } else if (ctx && ctx.gameover && ctx.gameover.loose) {
      return 'You lost';
    }
  }

  render() {
    const { ctx, G, gameArgs, moves } = this.props;
    return (
      <GameLayout
        gameOver={this.getGameOverStatus(ctx)}
        gameArgs={gameArgs}>
        <div style={{backgroundColor: grey[200] }}>
        {G.attempts.map((attempt) => (
          <>
            {attempt.combination.map((combinationValue, position) => (
              <span key={position} style={{ display: 'inline-block', width: '50px', height: '50px', backgroundColor: combinationValue.hex}}>&nbsp;</span>
            ))}
            {attempt.hints.map((value, position) => (
              <span key={position} style={{ display: 'inline-block', width: '25px', height: '25px', backgroundColor: 'grey'}}>{this.getHintValue(value)}</span>
            ))}
            <hr />
          </>
        )).reverse()}
        <hr />
        {G.colours.map((colour) => (
          <button key={colour.id} onClick={() => this.selectColour(colour.id)} style={{ borderRadius: 50, width: '50px', height: '50px', backgroundColor: colour.hex}}>{IMAGES[colour.img]}</button>
        ))}
        <hr />
        {G.current.map((currentValue, position) => (
          <button key={position} onClick={() => moves.setColourInPosition(this.state.currentColourId, position)} style={{ width: '50px', height: '50px', backgroundColor: currentValue && currentValue.hex || 'grey'}}>&nbsp;</button>
        ))}
        <button onClick={() => moves.check()}>confirm</button>
        </div>
      </GameLayout>
    );
  }
}
