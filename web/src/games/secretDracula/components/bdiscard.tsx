import React from 'react';
import { IPolicy } from '../interfaces'
import { BPolicy } from './bpolicy'

interface InnerWrapper {
    policies: IPolicy[];

    vetoEnabled: boolean;

    mayor: boolean;
    
    discard(index: number): any;
    veto(want: boolean): any;
}

export class BDiscard extends React.Component<InnerWrapper, {}> {
    render() {
        return (
            <div>
              <div>
                  { (this.props.vetoEnabled && this.props.mayor) ? 
                  <div> {this._forceButton()} </div> : <></>
                  }
              </div>

              <div>
                  { this.props.policies.map( (a, index) => 
                  {return( <div> <BPolicy policy={a} discard={() => this.props.discard(index)}></BPolicy> </div>)}
                  )}
              </div>

              <div>
                  { (this.props.vetoEnabled && this.props.mayor) ? 
                  <div> {this._agreeVeto()} </div> 
                    :
                  <div> {this._proposeVeto()} </div> 
                  }
              </div>
            </div>
        )
    }

    _forceButton = () => {
        return(
            <button onClick={()=> this.props.veto(false) }>Force Play</button>
        )
    }
    _agreeVeto = () => {
        return(
            <button onClick={()=> this.props.veto(true) }>Agree Veto</button>
        )
    }
    _proposeVeto= () => {
        return(
            <button onClick={()=> this.props.veto(true) }>Propose Veto</button>
        )
    }
}