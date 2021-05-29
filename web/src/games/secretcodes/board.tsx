import * as React from 'react';
import { IG, Phases, TeamColor } from './definitions';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import css from './board.module.css';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Lobby } from './Lobby';
import { PlayBoard } from './PlayBoard';
import { useCurrentGameTranslation } from 'infra/i18n';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  step?: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isActive: boolean;
  isMultiplayer: boolean;
}

export function Board({ G, ctx, moves, events, playerID, gameArgs, isActive }: IBoardProps) {
  const { translate } = useCurrentGameTranslation();

  const isHost = () => playerID === '0';

  const _renderLobby = () => {
    return (
      <Lobby G={G} ctx={ctx} moves={moves} events={events} playerID={playerID} gameArgs={gameArgs} isHost={isHost()} />
    );
  };

  const _renderPlayBoard = (isGameOver?: boolean) => {
    return (
      <PlayBoard
        G={G}
        ctx={ctx}
        moves={moves}
        events={events}
        playerID={playerID}
        gameArgs={gameArgs}
        isActive={isActive}
        isHost={isHost()}
        isGameOver={isGameOver}
      />
    );
  };

  const _getScoreBoard = () => {
    return (
      <div className={[css.winners].join(' ')}>
        <h3>{translate('winners')}</h3>
        {ctx.gameover.winner.playersID.map((id) => {
          return <p key={id}>{gameArgs.players[id].name}</p>;
        })}
        <br />
        {_renderPlayBoard(true)}
      </div>
    );
  };

  const _getGameOverText = (): string => {
    if (ctx.gameover.winner.color === TeamColor.Blue) {
      return translate('blue_team_wins');
    }

    return translate('red_team_wins');
  };

  if (ctx.gameover)
    return <GameLayout gameOver={_getGameOverText()} extraCardContent={_getScoreBoard()} gameArgs={gameArgs} />;

  let content;
  if (ctx.phase === Phases.lobby) {
    content = _renderLobby();
  } else {
    content = _renderPlayBoard();
  }
  return (
    <GameLayout gameArgs={gameArgs} allowWiderScreen={true}>
      {content}
    </GameLayout>
  );
}
