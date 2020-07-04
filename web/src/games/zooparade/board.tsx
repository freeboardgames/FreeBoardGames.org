import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { IG } from './interfaces';

import { BHand } from './components/bhand';
import { BTrash } from './components/btrash';
import { BPiles } from './components/bpiles';
import { BToken } from './components/btoken';
import { BDeck } from './components/bdeck';
import { BButtons } from './components/bbuttons';
import { BNameBadge } from './components/bnamebadge';
import { BLog } from './components/blog';
import { Ctx } from 'boardgame.io';

import css from './board.css';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  detailedDiscard: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state: IBoardState = {
    detailedDiscard: false,
  };

  toggleDetailedDiscard = () => {
    this.setState((s) => {
      return { detailedDiscard: !s.detailedDiscard };
    });
  };

  render() {
    var me = this.props.playerID ? parseInt(this.props.playerID) : 1; // TODO : Local Fix - defaults to player 1
    var playerID = this.props.playerID ? this.props.playerID : '1'; // TODO : Local Fix

    let hands = this.props.G.hands;
    let rotatedHands = hands.slice(me + 1, hands.length).concat(hands.slice(0, me + 1));

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.wrapper}>
          <div className={css.info}></div>
          <div className={css.hands}>
            {rotatedHands.map((hand) => {
              let index = hand.player;
              return (
                <div className={css.hand} key={'Board' + index.toString()}>
                  <BNameBadge
                    name={this.props.gameArgs.players[index].name}
                    turn={index.toString() == this.props.ctx.currentPlayer}
                  ></BNameBadge>
                  {index === me ? null : (
                    <BButtons
                      onHintColor={(value: number) => {
                        this.props.moves.moveHintColor(index, value);
                      }}
                      onHintValue={(value: number) => {
                        this.props.moves.moveHintValue(index, value);
                      }}
                      myTurn={this.props.ctx.currentPlayer === playerID}
                      keyPropagation={'Board' + index.toString()}
                    ></BButtons>
                  )}
                  <BHand
                    hand={hand}
                    me={me === index}
                    onPlay={(id: number) => {
                      this.props.moves.movePlay(id);
                    }}
                    onTrash={(id: number) => {
                      this.props.moves.moveDiscard(id);
                    }}
                    myTurn={this.props.ctx.currentPlayer === playerID}
                    keyPropagation={'Board' + index.toString()}
                  ></BHand>
                </div>
              );
            })}
          </div>
          <div className={css.controls}>
            <div className={css.piles}>
              <BPiles piles={this.props.G.piles} keyPropagation={'Board'}></BPiles>
            </div>
            <BDeck cardsLeft={this.props.G.deckindex}></BDeck>
            <BToken treats={this.props.G.treats} countdown={this.props.G.countdown}></BToken>
            <BTrash
              onClick={this.toggleDetailedDiscard}
              card={this.props.G.trash.length !== 0 ? this.props.G.trash[this.props.G.trash.length - 1] : null}
            />

            <div className={this.state.detailedDiscard ? [css.discard, css.show].join(' ') : css.discard}>
              Full details of cards discarded will go here.
            </div>
          </div>
          <div>
            <BLog lines={this.props.G.movelog} keyPropagation={'Board'}></BLog>
          </div>
        </div>
      </GameLayout>
    );
  }
}
