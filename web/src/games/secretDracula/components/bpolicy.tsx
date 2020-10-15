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
            <div>
                <button onClick={()=> this.props.discard()}>
                    { this.props.policy.chalice ? this._chalice() : this._garlic()}
                </button>
            </div>
        )
    }


  _chalice = () => {
      return (
      <div> 
          Chalice
      </div>
      )
  };

  _garlic = () => {
      return (
      <div> 
         Garlic 
      </div>
      )
  }

}