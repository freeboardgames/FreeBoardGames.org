import React, { FunctionComponent } from 'react';
import { IG, IScoreKeeper, playerEnum, stageEnum, phaseEnum } from './game';
import css from './ACardTable.module.css';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CardContainer from './CardContainer';
import CribContainer from './CribContainer';
import DeckContainer from './DeckContainer';
import { Ctx } from 'boardgame.io';
import CribbageBoard from './CribbageBoard';

type IACardTableProps = {
  G?: IG;
  ctx: Ctx;
  gameArgs?: any;
  moves?: any;
  playerID: string;
};

const ACardTable: FunctionComponent<IACardTableProps> = (props: IACardTableProps) => {
  let { G } = props;
  let { ctx } = props;
  let { currentPlayer } = ctx;
  let thescore: IScoreKeeper = G.score;
  let pegPointsMove = props.moves.pegPoints;
  let resetScore = props.moves.resetGamePegs;
  let stageStr = props.ctx.activePlayers ? props.ctx.activePlayers[props.ctx.playerID === '0' ? 0 : 1] : null;
  let stage: stageEnum = stageEnum[stageStr];
  let crib = G.hands.east.private;
  let cribFlipped = G.hands.east.cribFlipped ? { flipped: true } : {};
  let theTurn = props.G.deck.length === 1 ? { turn: true } : { concealed: true };
  let playerIDStr: string = props.playerID;
  let currentDealer = currentPlayer as playerEnum;
  let playerID: playerEnum = playerIDStr as playerEnum;

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
    gameState: { playerID: playerID, phase: phaseEnum[props.ctx.phase], stage: stage, cutTie: G.cutTie, currentDealer },
  };

  const turnArrow = currentDealer === playerID ? <ArrowDownward /> : <ArrowUpward />;
  const grid = currentDealer === playerID ? css.gridmine : css.gridtheirs;
  return (
    <div className={grid}>
      <div className={css.opponent_hand}>
        <CardContainer name="Top Hand" cards={G.hands.top.held} collaborator={collaborator} />
      </div>
      <div className={css.opponent}>
        <CardContainer collaborator={collaborator} name="Top" cards={G.hands.top.played} />
      </div>
      <div className={css.crib}>
        <CribContainer name="Crib" collaborator={collaborator} cards={crib} {...cribFlipped} />
      </div>
      <div className={css.deck}>
        <DeckContainer name="Deck" cards={G.deck} deck {...theTurn} collaborator={collaborator} />
      </div>
      <div className={css.turnarrow}>{turnArrow}</div>
      <div className={css.cribbageboardbutton}>
        <div className={css.gamestate}>
          {collaborator.gameState.phase}:{collaborator.gameState.stage}
        </div>
        <div className={playerID === '1' ? css.scorewhite : css.scorered}>{thescore.far.front}</div>
        <CribbageBoard playerID={playerID} score={thescore} updateScore={pegPointsMove} resetGame={resetScore} />
        <div className={playerID === '1' ? css.scorered : css.scorewhite}>{thescore.near.front}</div>
        <div></div>
      </div>
      <div className={css.player}>
        <CardContainer name="Low" collaborator={collaborator} cards={G.hands.low.played} />
      </div>
      <div className={css.player_hand}>
        <CardContainer name="Low Hand" cards={G.hands.low.held} collaborator={collaborator} />
      </div>
    </div>
  );
};

export default ACardTable;
