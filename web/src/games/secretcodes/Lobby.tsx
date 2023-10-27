import * as React from 'react';
import { IG, TeamColor } from './definitions';
import css from './Lobby.module.css';
import { LobbyTeam } from './LobbyTeam';
import { IGameArgs } from 'gamesShared/definitions/game';
import { LobbyPlayer } from './LobbyPlayer';
import { Ctx } from 'boardgame.io';
import { isLocalGame } from '../../gamesShared/helpers/gameMode';
import Button from '@material-ui/core/Button';
import { getPlayerTeam, gameCanStart } from './util';
import { useCurrentGameTranslation } from 'infra/i18n';

interface ILobbyProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  events: any;
  playerID: string;
  gameArgs?: IGameArgs;
  isHost: boolean;
}

export function Lobby({ G, ctx, moves, playerID, gameArgs, isHost }: ILobbyProps) {
  const { translate } = useCurrentGameTranslation();
  const { players } = gameArgs;

  const startGame = () => {
    moves.startGame();
  };
  const removePlayersFromTeams = () => {
    moves.removePlayersFromTeams();
  };
  const distributePlayers = () => {
    moves.distributePlayers(players);
  };

  React.useEffect(() => {
    if (isLocalGame(gameArgs) && gameCanStart(G, ctx)) {
      startGame();
    }
  }, []);

  const teams = {
    [TeamColor.Blue]: [],
    [TeamColor.Red]: [],
    unassigned: [],
  };

  for (const playerID in players) {
    const item = (
      <LobbyPlayer key={playerID} G={G} moves={moves} playerID={playerID} players={players} isHost={isHost} />
    );

    teams[getPlayerTeam(G, playerID)?.color || 'unassigned'].push(item);
  }

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{translate('select_teams')}</h1>

      <div className={css.teamsContainer}>
        <LobbyTeam
          moves={moves}
          G={G}
          playerID={playerID}
          classes={[css.team, css.teamBlue].join(' ')}
          teamName={translate('blue_team')}
          teamPlayers={teams[TeamColor.Blue]}
          teamColor={TeamColor.Blue}
        />
        <LobbyTeam
          moves={moves}
          G={G}
          playerID={playerID}
          classes={[css.team, css.teamRed].join(' ')}
          teamName={translate('red_team')}
          teamPlayers={teams[TeamColor.Red]}
          teamColor={TeamColor.Red}
        />
        <div className={[css.team, css.unassigned].join(' ')}>
          <h3>{translate('unassigned')}</h3>
          <ul>{teams.unassigned}</ul>
        </div>
      </div>

      {!gameCanStart(G, ctx) ? <p className={css.text}>{translate('in_order_to_start')}</p> : null}

      <div className={css.controls}>
        {isHost ? (
          <Button
            onClick={removePlayersFromTeams}
            color="primary"
            variant="contained"
          >
            {translate('removePlayersFromTeams')}
          </Button>
        ) : null}

        {isHost ? (
          <Button
            onClick={distributePlayers}
            color="primary"
            variant="contained"
          >
            {translate('distributePlayers')}
          </Button>
        ) : null}

        {isHost ? (
          <Button
            onClick={startGame}
            color="primary"
            variant="contained"
            disabled={!gameCanStart(G, ctx)}
          >
            {translate('play')}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
