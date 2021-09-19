import * as React from 'react';

import css from './PlayerZones.module.css';
import { PlayerZone } from './PlayerZone';

import { IPlayer } from '../types';
import * as util from '../util/misc';

export function PlayerZones(props: {
  currentPlayerId: string;
  perspectivePlayerId: string;
  currentLeaderId: string;
  players: IPlayer[];
  playerNames: string[];
  contract: number;
  tout: boolean;
  contra: number;
}) {
  function renderZone(index: number) {
    const perspectiveIndex = +props.perspectivePlayerId;
    const numPlayers = props.players.length;
    const player = props.players[index];
    const active = (!props.currentPlayerId && !player.isReady) || player.id === props.currentPlayerId;
    return (
      <div key={index} className={css.zone}>
        <PlayerZone
          numPlayers={numPlayers}
          contract={props.contract}
          biddingEnded={props.players.some((p) => p.isTaker)}
          roundEnded={props.currentLeaderId == ''}
          player={player}
          playerName={props.playerNames[index]}
          active={active}
          leader={player.id === props.currentLeaderId}
          tout={props.tout}
          contra={props.contra}
          positionIndex={util.mod(index - perspectiveIndex, numPlayers)}
        />
      </div>
    );
  }

  return (
    <div className={css.playerZonesContainer}>
      <div className={css.playerZones}>{props.players.map((_, i) => renderZone(i))}</div>
      <div className={css.centerDisplay}></div>
    </div>
  );
}
