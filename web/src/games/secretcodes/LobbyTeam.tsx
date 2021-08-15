import * as React from 'react';
import { IG, TeamColor } from './definitions';
import css from './Lobby.module.css';
import Button from '@material-ui/core/Button';
import { getPlayerTeam } from './util';
import { useCurrentGameTranslation } from 'infra/i18n';

interface ILobbyTeamProps {
  G: IG;
  playerID: string;
  moves: any;
  classes: string;
  teamPlayers: any;
  teamName: string;
  teamColor: TeamColor;
}

export function LobbyTeam({ G, playerID, moves, classes, teamPlayers, teamName, teamColor }: ILobbyTeamProps) {
  const { translate } = useCurrentGameTranslation();

  const _switchTeam = (teamColor: TeamColor) => {
    if (playerID === null) return;
    if (!canSwitchToTeam(teamColor)) return;

    moves.switchTeam(teamColor);
  };

  const canSwitchToTeam = (teamColor: TeamColor): boolean => {
    if (playerID === null) return false;
    const team = getPlayerTeam(G, playerID);

    return team?.color !== teamColor;
  };

  return (
    <div className={classes}>
      <h3>{teamName}</h3>
      <ul>{teamPlayers}</ul>
      <Button
        className={css.selectTeamBtn}
        variant="contained"
        onClick={() => _switchTeam(teamColor)}
        color="secondary"
        disabled={!canSwitchToTeam(teamColor)}
      >
        {translate('select')}
      </Button>
    </div>
  );
}
