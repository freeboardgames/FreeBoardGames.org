import * as React from 'react';

import css from './PlayerZones.module.css';
import { PlayerZone } from './PlayerZone';

import { Announcement, Contract, IPlayer } from '../types';
import * as util from '../util/misc';

export function PlayerZones(props: {
  currentPlayerId: string;
  perspectivePlayerId: string;
  currentLeaderId: string;
  players: IPlayer[];
  playerNames: string[];
  contract: number;
  announcementRe: Announcement;
  announcementContra: Announcement;
}) {
  function renderZone(index: number) {
    const perspectiveIndex = +props.perspectivePlayerId;
    const player = props.players[index];
    const active = (!props.currentPlayerId && !player.isReady) || player.id === props.currentPlayerId;
    const announcement = player.isTaker ? props.announcementRe : props.announcementContra;
    const numTakersKnown = props.players.filter((P) => P.isTaker).length;
    const takersKnown = props.contract > Contract.Solo || numTakersKnown == 2;
    return (
      <div key={index} className={css.zone}>
        <PlayerZone
          contract={props.contract}
          biddingEnded={props.contract > Contract.None}
          roundEnded={props.currentLeaderId == ''}
          player={player}
          playerName={props.playerNames[index]}
          takersKnown={takersKnown}
          active={active}
          leader={player.id === props.currentLeaderId}
          announcement={announcement}
          positionIndex={util.mod(index - perspectiveIndex, 4)}
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
