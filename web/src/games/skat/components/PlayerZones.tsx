import * as React from 'react';

import css from './PlayerZones.module.css';
import { PlayerZone } from './PlayerZone';

import { IPlayer, Contract, CardColor, Announcement } from '../types';
import * as util from '../util/misc';

export function PlayerZones(props: {
  currentPlayerId: string;
  perspectivePlayerId: string;
  currentLeaderId: string;
  players: IPlayer[];
  playerNames: string[];
  contract: Contract;
  announcement: Announcement;
  handGame: boolean;
  trumpSuit: CardColor;
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
          trumpSuit={props.trumpSuit}
          announcement={props.announcement}
          handGame={props.handGame}
          biddingEnded={props.players.some((p) => p.isTaker)}
          roundEnded={props.currentLeaderId == ''}
          player={player}
          playerName={props.playerNames[index]}
          active={active}
          leader={player.id === props.currentLeaderId}
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
