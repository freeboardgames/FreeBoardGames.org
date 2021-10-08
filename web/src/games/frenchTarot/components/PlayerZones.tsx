import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

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
  slam: boolean;
}) {
  const { translate } = useCurrentGameTranslation();

  function renderZone(index: number) {
    const perspectiveIndex = +props.perspectivePlayerId;
    const numPlayers = props.players.length;
    const player = props.players[index];
    const active = (!props.currentPlayerId && !player.isReady) || player.id === props.currentPlayerId;
    const bid = player.isTaker ? props.contract : player.bid;
    return (
      <div key={index} className={css.zone}>
        <PlayerZone
          numPlayers={numPlayers}
          contract={props.contract}
          biddingEnded={props.players.some((p) => p.isTaker)}
          roundEnded={props.currentLeaderId == ''}
          bid={bid >= 0 ? `«${translate(util.getBidName(bid))}»` : ''}
          bidPass={bid == 0}
          announcement={player.isTaker && props.slam ? translate('slam_announced') : null}
          name={props.playerNames[index]}
          active={active}
          dealer={player.isDealer}
          taker={player.isTaker}
          leader={player.id === props.currentLeaderId}
          score={player.score.toString()}
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
