import React from 'react';
import { Log, Moves } from '../interfaces';
import { BHintIcon } from './bhinticon';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import css from './blog.module.css';
import { BCard } from './bcard';

interface InnerWrapper {
  log: Log[];
  players: IPlayerInRoom[];
  keyPropagation: string;
  lastOnly?: boolean;
}

export class BLog extends React.Component<InnerWrapper, {}> {
  render() {
    if (this.props.lastOnly && this.props.log.length > 0) {
      return <div className={css.logEntry}>{this.renderLog(this.props.log[this.props.log.length - 1])}</div>;
    }
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
        const status = log.success ? '✅ SUCCESS' : '❌ FAIL';
        if (this.props.lastOnly) {
          return (
            <>
              <b>
                {status}: {this.player(parseInt(log.player, 10))}
              </b>{' '}
              played
              <br /> {this.card(log.cardColor, log.cardValue)}
            </>
          );
        } else {
          return (
            <>
              <b>
                {status}: {this.player(parseInt(log.player, 10))}
              </b>{' '}
              played
              <br /> {this.color(log.cardColor)} {this.value(log.cardValue)} card.{' '}
            </>
          );
        }
      case Moves.moveDiscard:
        if (this.props.lastOnly) {
          return (
            <>
              <b>{this.player(parseInt(log.player, 10))}</b> discarded
              <br /> {this.card(log.cardColor, log.cardValue)}
            </>
          );
        } else {
          return (
            <>
              <b>{this.player(parseInt(log.player, 10))}</b> discarded {this.color(log.cardColor)}{' '}
              {this.value(log.cardValue)} card.
            </>
          );
        }
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

  card(color: number, value: number) {
    return <BCard card={{ color, value, id: 0 }} empty={null}></BCard>;
  }
}
