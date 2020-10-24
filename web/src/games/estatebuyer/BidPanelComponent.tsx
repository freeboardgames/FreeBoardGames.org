import * as React from 'react';

import { ButtonComponent } from './ButtonComponent';
import { playSound } from './Sound';

import css from './BidPanelComponent.css';

export interface IPlayerBidPanelProps {
  players: any;
  currentPlayer: any;
  moves: any;
  playerID: string;
  currentHighBid?: number;
}

export class BidPanelComponent extends React.Component<IPlayerBidPanelProps, { bid: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      bid: this.props.currentHighBid + 1,
    };
  }

  _bid = () => {
    this.props.moves.MovePlaceBid(this.state.bid);
  };

  _pass = () => {
    this.props.moves.MovePassBid();
  };

  setBidValue = (event: any) => {
    const val = parseInt(event.target.value);
    this.setState({ bid: val });
  };

  getCurrentPlayer = () => {
    return this.props.players[this.props.currentPlayer];
  };

  isValidMoney = () => {
    return this.state.bid > (this.props.currentHighBid || 0) && this.state.bid <= this.getCurrentPlayer().money;
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentPlayer != prevProps.currentPlayer) {
      this.setState({ bid: this.props.currentHighBid + 1 });
      if (this.props.players[prevProps.currentPlayer].passed) {
        playSound('Pass');
      } else if (this.props.players[prevProps.currentPlayer].bid > 0) {
        playSound('Bid');
      }
    }
  }

  render() {
    if (this.props.playerID === null) {
      return;
    }

    if (this.props.playerID !== this.props.currentPlayer) {
      return (
        <div className={css.BidPanel}>
          <span>Waiting for the other players to bid...</span>
        </div>
      );
    }

    return (
      <div className={css.BidPanel}>
        <div className={css.ButtonGroup}>
          <ButtonComponent click={this._bid} disabled={!this.isValidMoney()}>
            Bid
          </ButtonComponent>
          <input type="number" value={this.state.bid} onChange={this.setBidValue} />
        </div>

        <div className={css.ButtonGroup}>
          <ButtonComponent click={this._pass}>Pass</ButtonComponent>
        </div>
      </div>
    );
  }
}
