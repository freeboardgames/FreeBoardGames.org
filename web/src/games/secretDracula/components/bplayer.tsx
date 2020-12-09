import React from 'react';
import css from './bplayer.css';

interface InnerWrapper {
  me: boolean;

  playerName: string;
  playerActive: boolean;

  dead: boolean;
  vampire: boolean;
  dracula: boolean;

  mayor: boolean;
  priest: boolean;

  chose(): any;
}

export class BPlayer extends React.Component<InnerWrapper, {}> {
  hashCode = function (s) {
    let a = s.split('').reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    if (a < 0) {
      return -a;
    }
    return a;
  };

  render() {
    let my_rand_id = this.hashCode(this.props.playerName);

    return (
      <span className={css.player}>
        <span
          onClick={() => {
            this.props.chose();
          }}
        >
          <span className={css.tooltip}>
            <span style={{ float: 'left' }}>
              {this.props.playerActive ? '🕒 ' : ' '}
              <span className={css.tooltiptext}>This player needs to perform an action.</span>
            </span>
          </span>
          <span className={css.tooltip}>
            <span style={{ textAlign: 'center' }}>
              {this.props.dead
                ? this.deads[my_rand_id % this.deads.length]
                : this.props.vampire
                ? this.vampires[my_rand_id % this.vampires.length]
                : this.humans[my_rand_id % this.humans.length]}

              {this.props.vampire && !this.props.dracula ? (
                <span className={css.vampire}> {this.props.playerName} </span>
              ) : this.props.dracula ? (
                <span className={css.dracula}> {this.props.playerName} </span>
              ) : this.props.dead ? (
                <span className={css.dead}> {this.props.playerName} </span>
              ) : (
                <span> {this.props.playerName} </span>
              )}
            </span>
            <span className={css.tooltiptext}>
              Player. Depending on the color, this player is either
              <span className={css.dracula}>
                {' '}
                <b>Dracula </b>
              </span>
              or
              <span className={css.dead}>
                {' '}
                <b>dead.</b>
              </span>
              <br></br>A vampire can be identified by having a vampire image: 🧛🏻
            </span>
          </span>

          <span className={css.tooltip}>
            {this.props.priest ? '✝️' : ' '}
            <span className={css.tooltiptext}>This player is currently the Priest ✝️, or being nominated as such.</span>
          </span>

          <span className={css.tooltip}>
            {this.props.mayor ? '🏅' : ' '}
            <span className={css.tooltiptext}>This player is currently the Mayor 🏅, or being nominated as such.</span>
          </span>
        </span>
      </span>
    );
  }

  vampires = ['🧛🏽‍♂️', '🧛', '🧛🏽‍♀️', '🧛🏽', '🧛🏿', '🧛🏻‍♂️', '🧛🏻', '🧛🏼', '🧛🏼‍♀️', '🧛🏼‍♂️', '🧛🏾‍♀️'];
  humans = [
    '👩‍🎓',
    '👨‍🏫',
    '🧑‍🌾',
    '👩‍⚖️',
    '🧑‍🔧',
    '👩‍🍳',
    '🧑‍🏭',
    '🧑‍💼',
    '👩‍🔬',
    '🧑‍🎤',
    '👨‍✈️',
    '👩‍🚀',
    '👩‍🚒',
    '👮',
    '👷',
    '👳‍♀️',
  ];
  deads = ['⚰️', '💀', '☠', '👻', '⚱', '🪦'];
}
