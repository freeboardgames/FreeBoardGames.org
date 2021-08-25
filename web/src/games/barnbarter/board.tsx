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
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} gameOver={null}>
        {this.props.G.players.map((player, index) => {
          return (
            <BPlayer
              player={player}
              name={this.props.gameArgs.players[index].name}
              turn={true}
              clickPay={this.props.moves.movePay}
              key={'root_' + index}
            ></BPlayer>
          );
        })}

        <BCenter numberCards={this.props.G.cards.length} auction={this.props.G.auction}></BCenter>

        <BControl
          clickAuction={this.props.moves.moveChoseAuction}
          clickTrade={this.props.moves.moveChoseTrade}
          clickBid={this.props.moves.moveBid}
          clickGoing={this.props.moves.moveGoing}
        ></BControl>
      </GameLayout>
    );
  }
}
