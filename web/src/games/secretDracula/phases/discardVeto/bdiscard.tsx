import React from 'react';
import { IPolicy } from '../../interfaces';
import { BPolicy } from '../../components/bpolicy';

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
      <span style={{textAlign: "center"}}>
            {this.props.vetoEnabled && this.props.mayor ? <> {this._forceButton()} </> : <></>}
            {this.props.policies.map((a, index) => {
              return (
                <span key={'BDiscard-' + index.toString()}>
                  <span>
                    {' '}
                    <BPolicy policy={a}
                             hover={true}
                             discard={() => this.props.discard(index)}></BPolicy>{' '}
                  </span>
                </span>
              );
            })}
              {this.props.vetoEnabled ? (
                this.props.mayor ? (
                  <span> {this._agreeVeto()} </span>
                ) : (
                  <span> {this._proposeVeto()} </span>
                )
              ) : (
                <> </>
              )}
      </span>
    );
  }

  _forceButton = () => {
    return <span onClick={() => this.props.veto(false)}>👎</span>;
  };
  _agreeVeto = () => {
    return <span onClick={() => this.props.veto(true)}>👍</span>;
  };
  _proposeVeto = () => {
    return <span onClick={() => this.props.veto(true)}>✋</span>;
  };
}
