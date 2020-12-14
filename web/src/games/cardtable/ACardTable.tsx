import React, { FunctionComponent } from 'react';
import css from './ACardTable.module.css';
import { IG } from './game';
import CardContainer from './CardContainer';
import { Ctx } from 'boardgame.io';
import CribbageBoard from './CribbageBoard';

type IACardTableProps = {
  G?: IG;
  ctx: Ctx;
  gameArgs?: any;
};

const ACardTable: FunctionComponent<IACardTableProps> = (props: IACardTableProps) => {
  let { G } = props;
  //let currIdx = parseInt(props.ctx.currentPlayer);
  //let playerName = props.gameArgs.players[currIdx].name;
  let crib = G.hands.east.private;
  let cribFlipped = G.hands.east.cribFlipped ? { flipped: true } : {};
  let turn = props.G.deck.length === 1 ? { turn: true } : { concealed: true };

  return (
    <div className={css.grid}>
      <div className={css.opponent_hand}>
        <CardContainer name="South Hand" cards={G.hands.south.held} />
      </div>
      <div className={css.opponent}>
        <CardContainer name="South" cards={G.hands.south.played} />
      </div>
      <div className={css.crib}>
        <CardContainer name="Crib" concealed cards={crib} {...cribFlipped} />
      </div>
      <div className={css.cboard}>
        <CribbageBoard name="Cribbage Board" scoreKeeper={G.score}></CribbageBoard>
      </div>
      <div className={css.deck}>
        <CardContainer name="Deck" cards={G.deck} deck {...turn} />
      </div>
      <div className={css.player}>
        <CardContainer name="North" cards={G.hands.north.played} />
      </div>
      <div className={css.player_hand}>
        <CardContainer name="North" cards={G.hands.north.held} />
      </div>
    </div>
  );
};

export default ACardTable;
