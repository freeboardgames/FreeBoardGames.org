import React, { FunctionComponent } from 'react';
import css from './ACardTable.css';
import { IG, IScoreKeeper } from './game';
import CardContainer from './CardContainer';
import { Ctx } from 'boardgame.io';
import CribbageBoardB from './CribbageBoardB';
import { createTextChangeRange } from 'typescript';

type IACardTableProps = {
  G?: IG;
  ctx: Ctx;
  gameArgs?: any;
  moves?: any;
};

const ACardTable: FunctionComponent<IACardTableProps> = (props: IACardTableProps) => {
  let { G } = props;
  let thescore: IScoreKeeper = G.score;
  let updater = props.moves.pegPoints;
  let cardPlayer = props.moves.play;
  let cribPlayer = props.moves.putToCrib;
  let deckDealer = props.moves.deal;
  let cutTurnPlayer = props.moves.cutShowTurn;
  let cutDealPlayer = props.moves.cutForDeal;
  let phase = props.ctx.phase;
  let stage = (props.ctx.activePlayers) ? props.ctx.activePlayers[props.ctx.playerID === "0" ? 0 : 1] : null;

  //let currIdx = parseInt(props.ctx.currentPlayer);
  //let playerName = props.gameArgs.players[currIdx].name;
  let crib = G.hands.east.private;
  let cribFlipped = G.hands.east.cribFlipped ? { flipped: true } : {};
  let turn = props.G.deck.length === 1 ? { turn: true } : { concealed: true };

  return (
    <div className={css.grid}>
      <div className={css.opponent_hand}>
        <CardContainer
          name="South Hand"
          cards={G.hands.south.held}
          handlePlay={cardPlayer}
          handleCrib={cribPlayer}
          handleCutDeal={cutDealPlayer}
          phase={phase}
        />
      </div>
      <div className={css.opponent}>
        <CardContainer name="South" cards={G.hands.south.played} />
      </div>
      <div className={css.crib}>
        <CardContainer name="Crib" concealed cards={crib} {...cribFlipped} phase={phase} />
      </div>
      <div className={css.deck}>
        <CardContainer
          name="Deck"
          cards={G.deck}
          deck
          {...turn}
          handlePlay={deckDealer}
          handleCutTurn={cutTurnPlayer}
          handleCutDeal={cutDealPlayer}
          phase={phase}
        />
      </div>
      <div className={css.cribbageboard}>
        <CribbageBoardB score={thescore} updateScore={updater} />
      </div>
      <div className={css.player}>
        <CardContainer name="North" cards={G.hands.north.played} />
      </div>
      <div className={css.player_hand}>
        <CardContainer
          name="North Hand"
          cards={G.hands.north.held}
          handlePlay={cardPlayer}
          handleCrib={cribPlayer}
          phase={phase}
        />
      </div>
      <div>
        <h5>{phase}:{stage}</h5>
      </div>
    </div>
  );
};

export default ACardTable;
