import * as React from 'react';

interface InnerWrapper {
  clickAuction: () => void;
  clickTrade: () => void;
  clickGoing: () => void;
  clickBid: (number) => void;
}

export class BControl extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <div onClick={this.props.clickAuction}>|AUCTION|</div>
        <div onClick={this.props.clickTrade}>|TRADE|</div>
        <div onClick={this.props.clickGoing}>|GOING|</div>
        <table>
          <tbody>
            <tr>
              {[0, 10, 50, 100].map((value, index) => {
                return (
                  <td key={'control_' + index}>
                    <div
                      onClick={() => {
                        this.props.clickBid(value);
                      }}
                    >
                      |+{value}|
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
