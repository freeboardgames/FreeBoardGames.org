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
      <table>
        <tbody>
          <tr>
            {this.props.vetoEnabled && this.props.mayor ? <td> {this._forceButton()} </td> : <></>}
            {this.props.policies.map((a, index) => {
              return (
                <td key={"BDiscard-" + index.toString()}>
                  <div>
                    {' '}
                    <BPolicy policy={a} discard={() => this.props.discard(index)}></BPolicy>{' '}
                  </div>
                </td>
              );
            })}
            <td>
              {this.props.vetoEnabled ? (
                this.props.mayor ? (
                  <div> {this._agreeVeto()} </div>
                ) : (
                  <div> {this._proposeVeto()} </div>
                )
              ) : (
                <> </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  _forceButton = () => {
    return <div onClick={() => this.props.veto(false)}>👎</div>;
  };
  _agreeVeto = () => {
    return <div onClick={() => this.props.veto(true)}>👍</div>;
  };
  _proposeVeto = () => {
    return <div onClick={() => this.props.veto(true)}>✋</div>;
  };
}
