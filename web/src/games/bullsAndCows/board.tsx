import * as React from 'react';
import css from './Board.module.css';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { grey } from '@material-ui/core/colors';
import { Image } from './images';
import { IG } from './service';

interface IBoardProps {
  G: IG;
  ctx?: Ctx;
  moves: any;
  playerID?: string;
  gameArgs?: IGameArgs;
  selectColour?: any;
  currentColourId?: number | null;
  getHintValue?: any;
}

interface IBoardState {
  currentColourId: number | null;
}

const BoardBullsAndCows = ({ G, ctx, moves, selectColour, currentColourId, getHintValue }: IBoardProps) => (
  <div className={css.board} style={{ backgroundColor: grey[400] }}>
    <div className={css.attempts}>
      {ctx.gameover && (
        <div className={`${css.attempt} ${css.result}`}>
          <span className={css.number}>CODE:</span>
          {G.secret.map((secretValue, position) => (
            <span className={css.digit} key={position}>
              <Image img={secretValue.img} hex={secretValue.hex} />
            </span>
          ))}
        </div>
      )}
      {G.attempts
        .map((attempt, key) => (
          <div key={key} className={css.attempt}>
            <span className={css.number}>{String(key + 1).padStart(2, '0')}.</span>
            {attempt.combination.map((combinationValue, position) => (
              <span className={css.digit} key={position}>
                <Image img={combinationValue.img} hex={combinationValue.hex} />
              </span>
            ))}
            <div className={css.hints}>
              {attempt.hints.map((value, position) => (
                <span className={`${css.digit} ${css.hint}`} key={position}>
                  {getHintValue(value)}
                </span>
              ))}
            </div>
          </div>
        ))
        .reverse()}
      <div className={css.guess}>
        {G.current.map((currentValue, position) => (
          <button
            className={css.digit}
            key={position}
            onClick={() => moves.setColourInPosition(currentColourId, position)}
            style={{ backgroundColor: !currentValue ? 'grey' : 'transparent' }}
          >
            {(currentValue && <Image className={css.svg} img={currentValue.img} hex={currentValue.hex} />) || ''}
          </button>
        ))}
        <button className={css.guessBtn} onClick={() => moves.check()}>
          GUESS
        </button>
      </div>
    </div>
    <div className={css.colours}>
      {G.colours.map((colour) => (
        <button
          className={`${css.digit} ${currentColourId === colour.id ? css.selected : ''}`}
          key={colour.id}
          onClick={() => selectColour(colour.id)}
        >
          <Image className={css.svg} img={colour.img} hex={colour.hex} />
        </button>
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

  selectColour = (id: number) => {
    this.setState({ currentColourId: id });
  };

  getHintValue = (hint: number) => {
    if (hint === 1) {
      return '✓';
    } else if (hint === 0) {
      return 'X';
    } else {
      return '∅';
    }
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
        getHintValue={this.getHintValue}
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
          getHintValue={this.getHintValue}
        />
      </GameLayout>
    );
  }
}
