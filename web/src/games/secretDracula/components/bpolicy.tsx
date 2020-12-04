import React from 'react';
import { IPolicy } from '../interfaces';
import css from './bpolicy.css';

interface InnerWrapper {
  policy: IPolicy;
  hover: boolean;
  discard(): any;
}

export class BPolicy extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <>
        {this.props.policy == null ? (
          <span> 🃏 </span>
        ) : (
          <span onClick={() => this.props.discard()}>
            {this.props.policy.chalice ? this._chalice() : this._garlic()}
          </span>
        )}
      </>
    );
  }

  _chalice = () => {
    if (this.props.hover) {
      return <span className={css.hoveringb}> </span>;
    }

    return <>🩸</>;
  };

  _garlic = () => {
    if (this.props.hover) {
      return <span className={css.hoveringh}> </span>;
    }
    return <>💧</>;
  };
}
