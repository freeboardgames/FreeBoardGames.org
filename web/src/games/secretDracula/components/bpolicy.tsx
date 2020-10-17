import { VALID_SETUP_FIRST_PLAYER } from 'games/seabattle/mocks';
import React from 'react';
import { IPolicy } from '../interfaces'

interface InnerWrapper {
    policy: IPolicy;
    discard(): any;
}

export class BPolicy extends React.Component<InnerWrapper, {}> {
    render() {
        return (
                <div onClick={()=> this.props.discard()}>
                    { this.props.policy.chalice ? this._chalice() : this._garlic()}
                </div>
        )
    }


  _chalice = () => {
      return (
      <div> 
          🩸
      </div>
      )
  };

  _garlic = () => {
      return (
      <div> 
        💧
      </div>
      )
  }

}