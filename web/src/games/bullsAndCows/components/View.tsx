import * as React from 'react';
import css from './BullsAndCows.module.css';

import { IGameArgs } from 'gamesShared/definitions/game';
import { Ctx } from 'boardgame.io';
import { grey } from '@material-ui/core/colors';
import { IG, IMoves } from '../service';

import Attempt from './Attempt';
import ColourButton from './ColourButton';
import ColourCode from './ColourCode';
import Secret from './Secret';

export interface IViewProps {
  G: IG;
  ctx?: Ctx;
  moves: IMoves;
  playerID?: string;
  gameArgs?: IGameArgs;
  selectColour: (colourId: number) => void;
  currentColourId?: number | null;
}

const View = ({ G, ctx, moves, selectColour, currentColourId }: IViewProps) => (
  <div className={css.board} style={{ backgroundColor: grey[400] }}>
    <div className={css.attempts}>
      {ctx.gameover && <Secret secret={G.secret} />}
      {G.attempts
        .map((attempt, key) => <Attempt key={key} attempt={attempt} index={String(key + 1).padStart(2, '0')} />)
        .reverse()}
      <div className={css.guess}>
        {G.current.map((currentValue, position) => (
          <ColourCode
            key={position}
            colour={currentValue}
            currentColourId={currentColourId}
            position={position}
            onClick={moves.setColourInPosition}
          />
        ))}
        <button className={css.guessBtn} onClick={moves.check}>
          GUESS
        </button>
      </div>
    </div>
    <div className={css.colours}>
      {G.colours.map((colour) => (
        <ColourButton key={colour.id} currentColourId={currentColourId} colour={colour} onClick={selectColour} />
      ))}
    </div>
  </div>
);

export default View;
