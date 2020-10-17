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
                    <tbody>
                        <tr>
                        <td>
                            { this.props.playedPolicies > 0? this._played() : this._empty() }
                        </td>
                        <td>
                            { this.props.playedPolicies > 1? this._played() : this._empty() }
                        </td>
                        <td>
                            { this.props.playedPolicies > 2? this._played() : this._empty() }
                        </td>
                        <td>
                            { this.props.playedPolicies > 3? this._played() : this._empty() }
                        </td>
                        <td>
                            { this.props.playedPolicies > 4? this._played() : this._empty() }
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


  _played = () => {
      return (
      <> 
      <p> 
          💧
      </p>
      </>
      )
  };

  _empty = () => {
      return (
      <> 
      <p>
          ⬜        
      </p>
      </>
      )
  }

}