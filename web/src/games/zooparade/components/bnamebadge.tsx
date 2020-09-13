import React from 'react';

interface InnerWrapper {
  name: string;
  turn: boolean;
}

export class BNameBadge extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.turn === false ? '' : '🕒 '}
      </div>
    );
  }
}
