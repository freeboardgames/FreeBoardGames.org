import * as React from 'react';
import css from './Lobby.module.css';
import { getPlayerTeam, isPlayerSpymaster } from './util';
import { IG } from './definitions';
import { useCurrentGameTranslation } from 'infra/i18n';

interface ILobbyPlayerProps {
  G: IG;
  moves: any;
  playerID: string;
  players: any;
  isHost: boolean;
}

export function LobbyPlayer({ G, moves, playerID, players, isHost }: ILobbyPlayerProps) {
  const { translate } = useCurrentGameTranslation();

  const makeSpymaster = (playerID: string) => {
    moves.makeSpymaster(playerID);
  };

  const isPlayerAssignedToATeam = (): boolean => {
    return getPlayerTeam(G, playerID) !== undefined;
  };

  return (
    <li>
      {isPlayerSpymaster(G, playerID) ? <span>{translate('s')}</span> : ''}
      {players[playerID].name}
      {isHost && !isPlayerSpymaster(G, playerID) && isPlayerAssignedToATeam() ? (
        <button className={[css.btn, css.btnSpymaster].join(' ')} onClick={() => makeSpymaster(playerID)}>
          {translate('make_spymaster')}
        </button>
      ) : (
        ''
      )}
    </li>
  );
}
