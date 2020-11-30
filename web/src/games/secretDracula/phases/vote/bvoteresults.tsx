import React from 'react';

interface InnerWrapper {
  yes: number;
  no: number;
  ok(): any;
  done: boolean;
}

export class BEndVote extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <span style={{ textAlign: 'center' }}>
        <p>👍 : {this.props.yes}</p>
        <p>👎 : {this.props.no}</p>
        <p>
          {this.props.no < this.props.yes ? (
            <>
              {' '}
              Election <span style={{ color: 'green' }}> passes! </span>
            </>
          ) : (
            <>
              {' '}
              Election <span style={{ color: 'red' }}> did not pass! </span>
            </>
          )}
        </p>
        {this.props.done ? <span onClick={() => this.props.ok()}> 🆗 </span> : <></>}
      </span>
    );
  }
}
