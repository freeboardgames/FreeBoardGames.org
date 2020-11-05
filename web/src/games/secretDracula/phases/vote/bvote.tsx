import React from 'react';

interface InnerWrapper {
  yes(): any;
  no(): any;
}

export class BVote extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td onClick={() => this.props.yes()}>👍</td>
            <td onClick={() => this.props.no()}>👎</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
