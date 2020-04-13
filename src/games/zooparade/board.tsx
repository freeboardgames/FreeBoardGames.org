import * as React from 'react';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import { GameLayout } from '../../components/App/Game/GameLayout';
import { IGameCtx } from 'boardgame.io/core';
import { IG } from './interfaces';

import { BHand } from './components/bhand'; 

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps,  {}> {
  render() {
    return (
      <GameLayout
          gameArgs={this.props.gameArgs}
          >
          
          <BHand hand={this.props.G.hands[0]} >
            </BHand>
      </GameLayout>
    );
  }
}
        // <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre>
        // <pre>{JSON.stringify(this.props.G, null, 2)}</pre>
        // <pre>{JSON.stringify(this.props.ctx, null, 2)}</pre>
        // <pre>{JSON.stringify(this.props.moves, null, 2)}</pre>
        // <pre>{JSON.stringify(this.props.playerID, null, 2)}</pre>


//        <table>
//          <thead>
//          <tr>
//            <th> Treats </th>
//            <th> Countdown </th>
//          </tr>
//          </thead>
//          <tbody>
//          <tr>
//            <th>{JSON.stringify(this.props.G.treats)}</th>
//            <th>{JSON.stringify(this.props.G.countdown)}</th>
//          </tr>
//          </tbody>
//        </table>
//        <table>
//          <thead>
//          <tr>
//            <th> Color 0 </th>
//            <th> Color 1 </th>
//            <th> Color 2 </th>
//            <th> Color 3 </th>
//            <th> Color 4 </th>
//          </tr>
//          </thead>
//          <tbody>
//          <tr>
//            <th> {JSON.stringify(this.props.G.piles[0])}</th>
//            <th> {JSON.stringify(this.props.G.piles[1])}</th>
//            <th> {JSON.stringify(this.props.G.piles[2])}</th>
//            <th> {JSON.stringify(this.props.G.piles[3])}</th>
//            <th> {JSON.stringify(this.props.G.piles[4])}</th>
//          </tr> 
//          </tbody>
//        </table>
//        <table>
//          <thead>
//          <tr>
//            <th> Player ID</th>
//            <th> Cards </th>
//            <th> Hints </th>
//          </tr>
//          </thead>
//          <tbody>
//          <tr>
//            <th> 0 </th>
//            <th> {JSON.stringify(this.props.G.hands[0].cards)}</th>
//            <th> {JSON.stringify(this.props.G.hands[0].hints)}</th>
//          </tr> 
//          <tr>
//            <th> 1 </th>
//            <th> {JSON.stringify(this.props.G.hands[1].cards)}</th>
//            <th> {JSON.stringify(this.props.G.hands[1].hints)}</th>
//          </tr> 
//          </tbody>
//        </table>
//        <table>
//          <thead>
//          <tr>
//            <th> Trash </th>
//          </tr>
//          </thead>
//          <tbody>
//          <tr>
//            <th> {JSON.stringify(this.props.G.trash)}</th>
//          </tr> 
//          </tbody>
//        </table>
//
//        <pre>{JSON.stringify(this.props.ctx, null, 2)}</pre>
 