import * as React from 'react';

interface InnerWrapper {
  phase: string;
  clickAuction: () => void;
  clickTrade: () => void;
  clickTradeBack: () => void;
  clickTradeOffer: () => void;
  clickTradeCounter: () => void;
  clickGoing: () => void;
  clickPay: () => void;
  clickBid: (number) => void;
}

export class BControl extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        {this.props.phase == 'phaseStart' &&
        //TODO Check for all phases if current player is active! - and what stage.
        true ? (
          <div>
            <div onClick={this.props.clickAuction}>|AUCTION|</div>
            <div onClick={this.props.clickTrade}>|TRADE|</div>
          </div>
        ) : (
          <div></div>
        )}
        {this.props.phase == 'phaseTradeFirst' && true ? (
          <div>
            <div onClick={this.props.clickTradeOffer}>|TRADE OFFER|</div>
            <div onClick={this.props.clickTradeBack}>|TRADE BACK|</div>
          </div>
        ) : (
          <div></div>
        )}
        {this.props.phase == 'phaseTradeSecond' && true ? (
          <div onClick={this.props.clickTradeCounter}>|TRADE COUNTER|</div>
        ) : (
          <div></div>
        )}
        {this.props.phase == 'phaseAuctionPay' && true ? <div onClick={this.props.clickPay}>|PAY|</div> : <div></div>}
        {this.props.phase == 'phaseAuction' && true ? <div onClick={this.props.clickGoing}>|GOING|</div> : <div></div>}
        {this.props.phase == 'phaseAuction' && true ? (
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
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
