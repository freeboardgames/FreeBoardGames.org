import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { Ctx } from 'boardgame.io';
import { IG } from './types';
import { BottomInfo } from './components/BottomInfo';
import { PlayerInfo } from './components/PlayerInfo';
import Typography from '@material-ui/core/Typography';
import { useCurrentGameTranslation } from 'infra/i18n';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export function Board(props: IBoardProps) {
  const { translate } = useCurrentGameTranslation();

  function _canPlay() {
    if (props.ctx.phase === 'play') {
      return props.G.players[props.playerID].turnsLeft > 0;
    } else {
      return props.ctx.activePlayers !== null && props.ctx.activePlayers.hasOwnProperty(props.playerID);
    }
  }

  const _selectCard = (id: number) => {
    if (!_canPlay() || props.ctx.phase !== 'play') {
      return;
    }
    props.moves.selectCard(id);
  };

  const _useFork = () => {
    if (!_canPlay() || props.ctx.phase !== 'play') {
      return;
    }
    props.moves.useFork();
  };

  const _confirmScore = () => {
    if (!_canPlay() || props.ctx.phase !== 'score') {
      return;
    }
    props.moves.confirmScore();
  };

  function renderBoard() {
    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="750px">
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '8px' }}>
          {translate('round', { r: props.G.round })}
        </Typography>
        {_getPlayersInfo()}
        <BottomInfo
          playerID={props.playerID}
          G={props.G}
          ctx={props.ctx}
          selectCard={_selectCard}
          useFork={_useFork}
          confirmScore={_confirmScore}
        />
      </GameLayout>
    );
  }

  function renderGameOver() {
    return <GameLayout gameOver={_getGameOver()} extraCardContent={_getScoreboard()} gameArgs={props.gameArgs} />;
  }

  function _getGameOver() {
    const scoreboard: IScore[] = props.ctx.gameover.scoreboard;
    if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
      return translate('game_over.draw');
    } else {
      if (isSpectator(props.playerID)) {
        return translate('game_over.spectator');
      }
      if (scoreboard[0].score === scoreboard.find((e) => e.playerID === props.playerID).score) {
        return translate('game_over.win');
      } else {
        return translate('game_over.lose');
      }
    }
  }

  function _getScoreboard() {
    return (
      <Scoreboard
        scoreboard={props.ctx.gameover.scoreboard}
        playerID={props.playerID}
        players={props.gameArgs.players}
      />
    );
  }

  function _getPlayersInfo() {
    let p = (parseInt(props.playerID, 10) + 1) % props.ctx.numPlayers;
    let players = [];

    for (let i = 0; i < props.ctx.numPlayers; i++) {
      const playerName = props.gameArgs.players.find((e) => e.playerID === p).name;

      players.push(
        <PlayerInfo
          key={p}
          G={props.G}
          playerName={playerName}
          playerID={p.toString()}
          isSelf={i === props.ctx.numPlayers - 1}
          isNext={i === 0}
          isActive={props.ctx.activePlayers && props.ctx.activePlayers.hasOwnProperty(p)}
        />,
      );
      p = (p + 1) % props.ctx.numPlayers;
    }

    return players;
  }

  return props.ctx.gameover ? renderGameOver() : renderBoard();
}
