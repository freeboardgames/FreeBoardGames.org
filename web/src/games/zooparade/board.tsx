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
import { IOptionsItems } from 'gamesShared/components/fbg/GameDarkSublayout';

import css from './board.css';
import { AutoHide } from 'gamesShared/components/animation/AutoHide';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { isWin } from './endconditions';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  showLogs: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  state: IBoardState = {
    showLogs: false,
  };

  render() {
    if (this.props.ctx.gameover) {
      return this.renderGameover();
    }
    return (
      <>
        {this.renderNotification()}
        <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true} optionsMenuItems={this._getOptionsMenuItems}>
          {this.renderBoard()}
        </GameLayout>
      </>
    );
  }

  renderGameover() {
    let gameOver;
    if (isWin(this.props.G)) {
      gameOver = 'you won';
    } else {
      gameOver = 'you lost';
    }
    return <GameLayout gameOver={gameOver} extraCardContent={this.renderHeader()} gameArgs={this.props.gameArgs} />;
  }

  renderBoard() {
    return (
      <div className={css.wrapper}>
        {this.renderHeader()}
        {this.renderHands()}
        {this.renderLog()}
      </div>
    );
  }

  renderHeader() {
    return (
      <>
        <div className={css.info}></div>
        <div className={css.controls}>
          <div className={css.piles}>
            <BPiles piles={this.props.G.piles} keyPropagation={'Board'}></BPiles>
          </div>
          <BDeck cardsLeft={this.props.G.deckindex}></BDeck>
          <BToken treats={this.props.G.treats} countdown={this.props.G.countdown}></BToken>
          <BTrash card={this.props.G.trash.length !== 0 ? this.props.G.trash[this.props.G.trash.length - 1] : null} />
        </div>
      </>
    );
  }

  renderHands() {
    var me = this.props.playerID ? parseInt(this.props.playerID) : 1; // TODO : Local Fix - defaults to player 1
    var playerID = this.props.playerID ? this.props.playerID : '1'; // TODO : Local Fix

    let hands = this.props.G.hands;
    let rotatedHands = hands.slice(me + 1, hands.length).concat(hands.slice(0, me + 1));

    return (
      <div className={css.hands}>
        {rotatedHands.map((hand) => {
          let index = hand.player;
          return (
            <div className={css.hand} key={'Board' + index.toString()}>
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
              <BNameBadge
                name={this.props.gameArgs.players[index].name}
                turn={index.toString() == this.props.ctx.currentPlayer}
              ></BNameBadge>
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
    );
  }

  renderLog() {
    if (this.state.showLogs) {
      return (
        <div>
          <BLog log={this.props.G.movelog} players={this.props.gameArgs.players} keyPropagation={'Board'}></BLog>
        </div>
      );
    }
    return null;
  }

  renderNotification() {
    if (this.props.G.movelog.length === 0) {
      return null;
    }
    return (
      <AutoHide>
        <AlertLayer>
          <div className={css.notification}>
            <BLog
              log={this.props.G.movelog}
              players={this.props.gameArgs.players}
              keyPropagation={'Board'}
              lastOnly={true}
            ></BLog>
          </div>
        </AlertLayer>
      </AutoHide>
    );
  }

  _getOptionsMenuItems: () => IOptionsItems[] = () => {
    const options = [
      {
        onClick: this._toggleLogs,
        text: `${this.state.showLogs ? 'Hide' : 'Show'} logs`,
      },
    ];
    return options;
  };

  _toggleLogs = () => {
    this.setState({ showLogs: !this.state.showLogs });
  };
}
