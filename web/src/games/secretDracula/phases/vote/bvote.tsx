import React from 'react';

interface InnerWrapper {
  yes(): any;
  no(): any;
}

export class BVote extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <span>
            <span onClick={() => this.props.yes()}>👍</span>
            <span style={{width:"10px", 
                 display: "inline-block"}}></span>
            <span onClick={() => this.props.no()}>👎</span>
      </span>
    );
  }
}
