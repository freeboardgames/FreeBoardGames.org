import { VALID_SETUP_FIRST_PLAYER } from 'games/seabattle/mocks';
import React from 'react';

interface InnerWrapper {
    playerCount: number;

    playedPolicies: number;
}

export class BVampirePolicies extends React.Component<InnerWrapper, {}> {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        { this.props.playedPolicies > 0? this._played() : this._first(this.props.playedPolicies)}
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 1? this._played() : this._second(this.props.playedPolicies)}
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 2? this._played() : this._third(this.props.playedPolicies)}
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 3? this._played() : this._fourth(this.props.playedPolicies)}
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 4? this._played() : this._fifth(this.props.playedPolicies)}
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 5? this._played() : this._sixth(this.props.playedPolicies)}
                    </tr>
                </table>
            </div>
        )
    }


  _played = () => {
      return (
      <div> 
          Played 
      </div>
      )
  };

  _empty = () => {
      return (
      <div> 
          Empty
      </div>
      )
  }

  _investigate = () => {
      return (
      <div> 
         Investigate 
      </div>
      )
  }

  _special = () => {
      return (
      <div> 
         Speical 
      </div>
      )
  }

  _peek = () => {
      return (
      <div> 
        Peek 
      </div>
      )
  }

  _kill= () => {
      return (
      <div> 
        Kill 
      </div>
      )
  };
  
  _death= () => {
      return (
      <div> 
          Death
      </div>
      )
  }

  _first = (playerCount: number) => {
      if (playerCount >= 9){
          return this._investigate()
      }
      return this._empty()
  };
  _second = (playerCount: number) => {
      if (playerCount >= 7){
          return this._investigate()
      }
      return this._empty()
  };
  _third = (playerCount: number) => {
      if (playerCount >= 7){
          return this._special()
      }
      return this._peek()
  };
  _fourth = (playerCount: number) => {
      return this._kill()
  };

  _fifth = (playerCount: number) => {
      return this._kill()
  };

  _sixth = (playerCount: number) => {
      return this._death()
  };
}