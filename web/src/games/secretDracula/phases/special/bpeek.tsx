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
      <span style={{ textAlign: 'center' }}>
        <p>
          {this.props.policies.map((a) => {
            return (
              <span key={'Bpeek-' + a.toString()} style={{ textAlign: 'center' }}>
                {' '}
                <BPolicy policy={a} hover={false} discard={() => {}}></BPolicy>{' '}
              </span>
            );
          })}
          <span
            onClick={() => {
              this.props.ok();
            }}
            style={{ textAlign: 'center' }}
          >
            🆗
          </span>
        </p>
      </span>
    );
  }
}
