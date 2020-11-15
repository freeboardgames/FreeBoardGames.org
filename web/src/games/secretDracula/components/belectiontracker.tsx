import React from 'react';

interface InnerWrapper {
  count: number;
}

export class BElectionTracker extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.count == 0 ? '❤️' : '💔'}</td>
              <td>{this.props.count <= 1 ? '❤️' : '💔'}</td>
              <td>{this.props.count <= 2 ? '❤️' : '💔'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
