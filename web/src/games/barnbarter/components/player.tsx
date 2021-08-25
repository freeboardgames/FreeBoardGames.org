import * as React from 'react';
import { IPlayer } from '../definitions';
import { BMoney } from './money';
import { BCard } from './cards';
import { BNameBadge } from './namebadge';

interface InnerWrapper {
  player: IPlayer;
  name: string;
  turn: boolean;
  clickPay: any;
}

export class BPlayer extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <BNameBadge name={this.props.name} turn={this.props.turn}></BNameBadge>
        <BCard cards={this.props.player.cards}></BCard>
        <BMoney moneys={this.props.player.money} clickPay={this.props.clickPay}></BMoney>
        Current Bid: {this.props.player.currentBid == -1 ? ' - ' : this.props.player.currentBid}
      </div>
    );
  }
}
