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
                    <tbody>
                        <tr>
                        <td>
                            { this.props.playedPolicies > 0? this._played() : this._first(this.props.playedPolicies)}
                        </td>
                        <td>
                            { this.props.playedPolicies > 1? this._played() : this._second(this.props.playedPolicies)}
                        </td>
                        <td>
                            { this.props.playedPolicies > 2? this._played() : this._third(this.props.playedPolicies)}
                        </td>
                        <td>
                            { this.props.playedPolicies > 3? this._played() : this._fourth(this.props.playedPolicies)}
                        </td>
                        <td>
                            { this.props.playedPolicies > 4? this._played() : this._fifth(this.props.playedPolicies)}
                        </td>
                        <td>
                            { this.props.playedPolicies > 5? this._played() : this._sixth(this.props.playedPolicies)}
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


  _played = () => {
      return (
          <p>
          🩸
          </p>
      )
  };

  _empty = () => {
      return (
          <p>
          ⬜        
          </p>
      )
  }

  _investigate = () => {
      return (
          <p>
              🧄
          </p>
      )
  }

  _special = () => {
      return (
          <p>
            🗳️  
          </p>
      )
  }

  _peek = () => {
      return (
          <p>
              🧪
          </p>
      )
  }

  _kill= () => {
      return (
          <p>
              🗡️
          </p>
      )
  };
  
  _death= () => {
      return (
          <p>
              ⚰️
          </p>
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