import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './definitions';
import { IGameArgs } from 'gamesShared/definitions/game';
import { BPlayer } from './components/player';
import { BCenter } from './components/center';
import { BControl } from './components/control';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  hintKey: string | null;
  //  selectedCardId: number;   // Card for Trade
  //  selectedPlayerId: number; // Id of player to trade with
  //  selectedMoney: number[];  // the money that I will trade or pay
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  //  state = {
  //        hintKey: null,
  //        selectedCardId: -1,
  //        selectedPlayerId: -1,
  //        selectedMoney: null,
  //  }

  constructor(props) {
    super(props);
    //    this.setState({
    //        hintKey: null,
    //        selectedCardId: -1,
    //        selectedPlayerId: -1,
    //        selectedMoney: null,
    //    })
  }

  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} gameOver={null}>
        {this.props.G.players.map((player, index) => {
          return (
            <BPlayer
              player={player}
              playerId={index}
              name={this.props.gameArgs.players[index].name}
              turn={
                true //TODO: Pass if actually has turn!
              }
              clickPay={this.props.moves.movePay}
              clickChoseAnimal={() => {
                this._choseAnimal;
              }}
              //highlightCard={this.state.selectedPlayerId === index ? this.state.selectedCardId : -1}
              highlightCard={index}
              key={'root_' + index}
              _key={'root_' + index}
            ></BPlayer>
          );
        })}

        <BCenter numberCards={this.props.G.cards.length} auction={this.props.G.auction}></BCenter>

        <BControl
          phase={this.props.ctx.phase}
          clickAuction={this.props.moves.moveChoseAuction}
          clickTrade={this.props.moves.moveChoseTrade}
          clickTradeBack={this.props.moves.moveTradeBack}
          clickTradeOffer={this.props.moves.moveChoseAnimalAndMoney}
          clickTradeCounter={this.props.moves.moveAnswerTrade}
          clickBid={this.props.moves.moveBid}
          clickPay={this._chosePay}
          clickGoing={this.props.moves.moveGoing}
        ></BControl>

        {this.state}
      </GameLayout>
    );
  }

  _choseAnimal(playerId: number, cardId: number) {
    playerId;
    cardId;
    //    this.setState({
    //        hintKey: this.state.hintKey,
    //        selectedCardId: cardId,
    //        selectedPlayerId: playerId,
    //        selectedMoney: this.state.selectedMoney,
    //    })
  }

  _chosePay() {}
}
