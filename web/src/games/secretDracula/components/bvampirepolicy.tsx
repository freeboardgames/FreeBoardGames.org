import React from 'react';
import css from './bvampirepolicy.css';
import css2 from './bplayer.css';

interface InnerWrapper {
  playerCount: number;
  playedPolicies: number;
}

export class BVampirePolicies extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.vampire}>
              {this.props.playedPolicies > 0 ? this._played() : this._first(this.props.playerCount)}
              {this.props.playedPolicies > 1 ? this._played() : this._second(this.props.playerCount)}
              {this.props.playedPolicies > 2 ? this._played() : this._third(this.props.playerCount)}
              {this.props.playedPolicies > 3 ? this._played() : this._fourth(this.props.playerCount)}                    
              {this.props.playedPolicies > 4 ? this._played() : this._fifth(this.props.playerCount)}                     
              {this.props.playedPolicies > 5 ? this._played() : this._sixth(this.props.playerCount)}                     
      </div>                                                                                            
    );
  }

  _played = () => {
    return <div className={css.tooltip}>🩸
        <span className={css.tooltiptext}>
          Already played.
        </span>
    </div>
  };

  _empty = () => {
    return <div className={css.tooltip}> ⬜
        <span className={css.tooltiptext}>
          No special action is performed when a 💧 or 🩸 is played here.
        </span>
      </div>
  };

  _investigate = () => {
    return <div className={css.tooltip}> 🕵️
        <span className={css.tooltiptext}>
          When 🩸 is played here, the current Mayor 🏅 
           <b> investigates </b> any other player.
          If this player is a vampire, the Mayor will see a  🩸 .
          Otherwise the Mayor will see a 💧.

          NOTE: This does not reveal if a vampire is 
          <div className={css2.dracula}> <b>Dracula</b></div>.
        </span>
      </div>;
  };

  _special = () => {
    return <div className={css.tooltip}> 🗳️
        <span className={css.tooltiptext}>
          When 🩸 is played here, the current Mayor 🏅 choses the 
          next Mayor, resulting in a <b> special election </b>.
          If this election passes with suficient 👍 votes, there is a 
          special Mayor. After this term, the player after the current Mayor 
          will be the next Mayor. It is possible for this player to be the 
          same player as the special Mayor, allowing this player two consecutive
          terms as Mayor.
        </span>
      </div>;
  };

  _peek = () => {
    return <div className={css.tooltip}>🧪
        <span className={css.tooltiptext}>
          When 🩸 is played here, the current Mayor 🏅 performs an
          <b> analysis </b> of the next three samples.
          The Mayor thus knows the following three samples, 
          for example 🩸💧💧.
        </span>
      </div>;
  };

  _kill = () => {
    return <div className={css.tooltip}>🗡️
        <span className={css.tooltiptext}>
          When 🩸 is played here, the current Mayor 🏅 choses 
          one player to <b>execute</b>. 
          If <div className={css2.dracula}> <b>Dracula</b></div> is killed, the humans win!
        </span>
      </div>;
  };

  _death = () => {
    return <div className={css.tooltip}>⚰️
        <span className={css.tooltiptext}>
            When 🩸 is played here the vampires win.
        </span>
        </div>
  };

  _first = (playerCount: number) => {
    if (playerCount >= 9) {
      return this._investigate();
    }
    if (playerCount < 3){
      return this._empty();
    }
    return this._empty();
  };
  _second = (playerCount: number) => {
    if (playerCount >= 7) {
      return this._investigate();
    }
    if (playerCount < 3){
      return this._empty();
    }
    return this._empty();
  };
  _third = (playerCount: number) => {
    if (playerCount >= 7) {
      return this._special();
    }
    if (playerCount < 3){
      return this._peek();
    }
    return this._peek();
  };
  _fourth = (playerCount: number) => {
    if (playerCount < 3){
      return this._peek();
    }
    return this._kill();
  };

  _fifth = (playerCount: number) => {
    if (playerCount < 3){
      return this._peek();
    }
    return this._kill();
  };

  _sixth = (playerCount: number) => {
    return this._death();
  };
}
