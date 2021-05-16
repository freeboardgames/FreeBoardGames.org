import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { Trans, WithCurrentGameTranslation, withCurrentGameTranslation } from 'infra/i18n';
import React from 'react';
import { compose } from 'recompose';
import { Log, Moves } from '../interfaces';
import { BCard } from './bcard';
import { BHintIcon } from './bhinticon';
import css from './blog.module.css';

interface InnerProps extends WithCurrentGameTranslation {}

interface OutterProps {
  log: Log[];
  players: IPlayerInRoom[];
  keyPropagation: string;
  lastOnly?: boolean;
}

const enhance = compose<InnerProps, OutterProps>(withCurrentGameTranslation);

export class BLogInternal extends React.Component<InnerProps & OutterProps, {}> {
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
    const { translate } = this.props;

    switch (log.move) {
      case Moves.movePlay:
        const status = log.success ? translate('blog.success') : translate('blog.fail');
        if (this.props.lastOnly) {
          return (
            <Trans
              t={translate}
              i18nKey="blog.status_player_played_card"
              components={{
                b: <b />,
                card: this.card(log.cardColor, log.cardValue),
              }}
              values={{
                status,
                player: this.player(parseInt(log.player, 10)),
              }}
            />
          );
        } else {
          return (
            <Trans
              t={translate}
              i18nKey="blog.status_player_played_color_value"
              components={{
                b: <b />,
                color: this.color(log.cardColor),
                value: this.value(log.cardValue),
              }}
              values={{
                status,
                player: this.player(parseInt(log.player, 10)),
              }}
            />
          );
        }
      case Moves.moveDiscard:
        if (this.props.lastOnly) {
          return (
            <Trans
              t={translate}
              i18nKey="blog.player_discarded_card"
              components={{
                b: <b />,
                card: this.card(log.cardColor, log.cardValue),
              }}
              values={{
                player: this.player(parseInt(log.player, 10)),
              }}
            />
          );
        } else {
          return (
            <Trans
              t={translate}
              i18nKey="blog.player_discarded_color_value"
              components={{
                b: <b />,
                color: this.color(log.cardColor),
                value: this.value(log.cardValue),
              }}
              values={{
                player: this.player(parseInt(log.player, 10)),
              }}
            />
          );
        }
      case Moves.moveHintColor:
        return (
          <Trans
            t={translate}
            i18nKey="blog.player_gave_a_color_hint"
            components={{
              b: <b />,
              color: this.color(log.hintColor),
            }}
            values={{
              player: this.player(parseInt(log.player, 10)),
              receiver: this.player(log.hintReceiver),
            }}
          />
        );
      case Moves.moveHintValue:
        return (
          <Trans
            t={translate}
            i18nKey="blog.player_gave_a_value_hint"
            components={{
              b: <b />,
              value: this.color(log.hintValue),
            }}
            values={{
              player: this.player(parseInt(log.player, 10)),
              receiver: this.player(log.hintReceiver),
            }}
          />
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

export const BLog = enhance(BLogInternal);
