import * as React from 'react';
import { IPlayer } from '../definitions';
import { BMoney } from './money';
import { BCard } from './cards';
import { BNameBadge } from './namebadge';

interface InnerWrapper {
  player: IPlayer;
  playerId: number;
  name: string;
  turn: boolean;
  clickPay: any;
  clickChoseAnimal: any;
  highlightCard: number;
  _key: string;
}

export class BPlayer extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <BNameBadge name={this.props.name} turn={this.props.turn}></BNameBadge>
        <BCard
          cards={this.props.player.cards}
          ownerID={this.props.playerId}
          highlightCard={this.props.highlightCard}
          onClick={(cardId: number) => {
            this.props.clickChoseAnimal(this.props.playerId, cardId);
          }}
          key={this.props._key + '_card'}
          _key={this.props._key + '_card'}
        ></BCard>
        <BMoney
          moneys={this.props.player.money}
          key={this.props._key + '_money'}
          _key={this.props._key + '_money'}
        ></BMoney>
        {this.props.player.currentBid == -1 ? '' : 'Current Bid: ' + this.props.player.currentBid}
      </div>
    );
  }
}
