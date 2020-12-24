import React, { FunctionComponent } from 'react';
import css from './ACardTable.css';
import { IG, IScoreKeeper } from './game';
import CardContainer from './CardContainer';
import { Ctx } from 'boardgame.io';
import CribbageBoardB from './CribbageBoardB';

type IACardTableProps = {
  G?: IG;
  ctx: Ctx;
  gameArgs?: any;
  moves?: any;
};

const ACardTable: FunctionComponent<IACardTableProps> = (props: IACardTableProps) => {
  let { G } = props;
  let thescore: IScoreKeeper = G.score;
  let pegPointsMove = props.moves.pegPoints;
  let stage = props.ctx.activePlayers ? props.ctx.activePlayers[props.ctx.playerID === '0' ? 0 : 1] : null;
  let crib = G.hands.east.private;
  let cribFlipped = G.hands.east.cribFlipped ? { flipped: true } : {};
  let theTurn = props.G.deck.length === 1 ? { turn: true } : { concealed: true };

  const collaborator = {
    handlers: {
      handleDeal: props.moves.deal,
      handlePlay: props.moves.play,
      handleCrib: props.moves.putToCrib,
      handleCutDeal: props.moves.cutForDeal,
      handleCutTurn: props.moves.cutShowTurn,
      handleFlip: props.moves.flipCrib,
      handleRotateTurn: props.moves.rotateTurnToDeal,
    },
    gameState: { phase: props.ctx.phase, stage: stage, cutTie: G.cutTie },
  };

  return (
    <div className={css.grid}>
      <div className={css.opponent_hand}>
        <CardContainer name="South Hand" cards={G.hands.south.held} collaborator={collaborator} />
      </div>
      <div className={css.opponent}>
        <CardContainer collaborator={collaborator} name="South" cards={G.hands.south.played} />
      </div>
      <div className={css.crib}>
        <CardContainer name="Crib" collaborator={collaborator} concealed cards={crib} {...cribFlipped} />
      </div>
      <div className={css.deck}>
        <CardContainer name="Deck" cards={G.deck} deck {...theTurn} collaborator={collaborator} />
      </div>
      <div className={css.cribbageboard}>
        <CribbageBoardB score={thescore} updateScore={pegPointsMove} />
      </div>
      <div className={css.player}>
        <CardContainer name="North" collaborator={collaborator} cards={G.hands.north.played} />
      </div>
      <div className={css.player_hand}>
        <CardContainer name="North Hand" cards={G.hands.north.held} collaborator={collaborator} />
      </div>
      <div>
        <h5>
          {collaborator.gameState.phase}:{collaborator.gameState.stage}
        </h5>
      </div>
    </div>
  );
};

export default ACardTable;
