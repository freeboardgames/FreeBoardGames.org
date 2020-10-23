import React from 'react';
import { IPolicy } from '../../interfaces';
import { BPolicy } from '../../components/bpolicy';

interface InnerWrapper {
  policies: IPolicy[];
  ok(): any;
}

export class BPeek extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.policies.map((a, index) => {
                return (
                  <td>
                    {' '}
                    <BPolicy policy={a} discard={() => {}}></BPolicy>{' '}
                  </td>
                );
              })}
              <td
                onClick={() => {
                  this.props.ok();
                }}
              >
               🆗 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
