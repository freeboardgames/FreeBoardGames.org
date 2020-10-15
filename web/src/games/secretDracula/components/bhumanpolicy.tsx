import { VALID_SETUP_FIRST_PLAYER } from 'games/seabattle/mocks';
import React from 'react';

interface InnerWrapper {
    playerCount: number;

    playedPolicies: number;
}

export class BHumanPolicies extends React.Component<InnerWrapper, {}> {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        { this.props.playedPolicies > 0? this._played() : this._empty() }
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 1? this._played() : this._empty() }
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 2? this._played() : this._empty() }
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 3? this._played() : this._empty() }
                    </tr>
                    <tr>
                        { this.props.playedPolicies > 4? this._played() : this._empty() }
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

}