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
      <table>
        <tbody>
          <tr>
            <td>{this.props.yes} 👍</td>
          </tr>
          <tr>
            <td>{this.props.no} 👎</td>
          </tr>
          {this.props.done ? (
            <tr>
              <td onClick={() => this.props.ok()}> 🆗 </td>
            </tr>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    );
  }
}
