import React from 'react';
import { Log, Moves } from '../interfaces';
import { BHintIcon } from './bhinticon';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import css from './blog.css';

interface InnerWrapper {
  log: Log[];
  players: IPlayerInRoom[];
  keyPropagation: string;
}

export class BLog extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.wrapper}>
        {this.props.log.map((log, index) => (
          <div className={css.logEntry} key={`log${index}`}>
            {this.renderLog(log)}
          </div>
        ))}
      </div>
    );
  }

  renderLog(log: Log) {
    switch (log.move) {
      case Moves.movePlay:
        return (
          <>
            <b>
              {log.success ? '✅ SUCCESS' : '❌ FAIL'}: {this.player(parseInt(log.player, 10))}
            </b>{' '}
            played {this.color(log.cardColor)} {this.value(log.cardValue)} card.{' '}
          </>
        );
      case Moves.moveDiscard:
        return (
          <>
            <b>{this.player(parseInt(log.player, 10))}</b> discarded {this.color(log.cardColor)}{' '}
            {this.value(log.cardValue)} card.
          </>
        );
      case Moves.moveHintColor:
        return (
          <>
            <b>{this.player(parseInt(log.player, 10))}</b> gave <b>{this.player(log.hintReceiver)}</b> a color hint:{' '}
            {this.color(log.hintColor)}
          </>
        );
      case Moves.moveHintValue:
        return (
          <>
            <b>{this.player(parseInt(log.player, 10))}</b> gave <b>{this.player(log.hintReceiver)}</b> a value hint:{' '}
            {this.value(log.hintValue)}
          </>
        );
    }
  }

  player(playerIndex: number) {
    return this.props.players[playerIndex].name;
  }

  color(color: number) {
    return <BHintIcon hintIcon={{ color, value: null }} keyPropagation={`color${color}`}></BHintIcon>;
  }

  value(value: number) {
    return <BHintIcon hintIcon={{ color: null, value }} keyPropagation={`value${value}`}></BHintIcon>;
  }
}
