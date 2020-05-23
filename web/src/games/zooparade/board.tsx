import * as React from 'react';
import { IGameArgs } from '../../components/App/Game/GameBoardWrapper';
import { GameLayout } from '../../components/App/Game/GameLayout';
import { IGameCtx } from 'boardgame.io/core';
import { IG } from './interfaces';

import { BHand } from './components/bhand'; 
import { BTrash } from './components/btrash'; 
import { BPiles } from './components/bpiles'; 
import { BToken } from './components/btoken';
import { BDeck } from './components/bdeck';
import { BButtons } from './components/bbuttons';
import { BNameBadge } from './components/bnamebadge';
import { BLog } from './components/blog';


interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

let handStyle = {
  display: 'flex'
}

export class Board extends React.Component<IBoardProps,  {}> {
  render() {

    var me = this.props.playerID ? parseInt(this.props.playerID) : 1 // TODO : Local Fix - defaults to player 1
    var playerID = this.props.playerID ? this.props.playerID : "1" // TODO : Local Fix
    
    let hands = this.props.G.hands;
    let rotatedHands = hands.slice(me + 1, hands.length).concat(hands.slice(0, me + 1));

    return (
      <GameLayout
          gameArgs={this.props.gameArgs}
          allowWiderScreen={true}
          >
          <div style={{display: 'flex'}}>
            <div>
                { rotatedHands.map(hand => {
                      let index = hand.player;
                      return (
                        <div key={"Board" + index.toString()}
                             style={handStyle}>
                               <BNameBadge name={ this.props.gameArgs.players[index].name }
                                          turn={  index.toString() == this.props.ctx.currentPlayer }
                              ></BNameBadge>
                            {index === me ?
                              <><hr />Your Hand:</>
                            :
                              <BButtons onHintColor={(value: number) => {this.props.moves.moveHintColor(index, value)}}
                                        onHintValue={(value: number) => {this.props.moves.moveHintValue(index, value)}}
                                        myTurn={this.props.ctx.currentPlayer === playerID}
                                        keyPropagation={"Board" + index.toString()}
                                        > 
                              </BButtons>
                            }
                            <BHand hand={ hand } 
                                   me={me === index} 
                                   onPlay={(id: number) => {this.props.moves.movePlay(id)}}
                                   onTrash={(id: number) => {this.props.moves.moveDiscard(id)}}
                                   myTurn={this.props.ctx.currentPlayer === playerID}
                                   keyPropagation={"Board" + index.toString()}
                                   >
                            </BHand>
                        </div>
                        )
                })}
            </div>
            <div>
                {
                  this.props.G.trash.length === 0
                  ?
                  <BTrash card={ null } >
                    </BTrash>
                  :
                  <BTrash card={this.props.G.trash[this.props.G.trash.length - 1]} >
                    </BTrash>
                }
                <BToken treats={this.props.G.treats} countdown={this.props.G.countdown}></BToken>
                <BDeck cardsLeft={this.props.G.deckindex}></BDeck>
              </div>
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '55px'}}>
              <BPiles piles={this.props.G.piles}
                          keyPropagation={"Board"}
                          ></BPiles>
            </div>
            <div>
              <BLog lines={ this.props.G.movelog } ></BLog>
            </div>
          </div>
      </GameLayout>
    );
  }
}