import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isOnlineGame } from 'gamesShared/helpers/gameMode';
import { Button } from '@material-ui/core';

import { IBoardProps, IBoardState, INumberState } from './definitions';
import {
  GRID_SIZE,
  CALL_BOX_SIZE,
  MAX_BINGO_CALLS,
  TIME_OUT,
  INITIAL_WAIT_REF_NUM,
  INITIAL_WAIT_TIME,
  BACKOFF_INTERVAL,
} from './constants';
import PlayCard from './components/playCard';
import CallCard from './components/callCard';
import Countdown from './components/countDown';
import CallTable from './components/callTable';

export class BingoBoard extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = {
      showCallTable: false,
    };
  }

  _getPlayerID = () => (isOnlineGame(this.props.gameArgs) ? this.props.playerID : this.props.ctx.currentPlayer);

  _callOnTimeout = (callRef: number) => {
    if (callRef >= this.props.G.callRef) {
      this.props.moves.incrementCallRef(this._getPlayerID());
    }
  };

  _numberClicked = (number: INumberState) => {
    this.props.moves.playerClickedNumber(number, this._getPlayerID());
  };

  _shoutBingo = () => {
    this.props.moves.playerShouted(this._getPlayerID());
  };

  _getPlayerName = (playerID = null) => {
    if (isOnlineGame(this.props.gameArgs)) {
      return this.props.gameArgs.players[playerID || this.props.ctx.currentPlayer].name;
    }
    return 'Player ' + this.props.ctx.currentPlayer;
  };

  _gameOverStatus = () => {
    if (this.props.ctx.gameover.draw) {
      return 'draw';
    }
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return `you lost (winner: ${this._getPlayerName(this.props.ctx.gameover.winner)})`;
      }
    } else {
      return `Player ${this.props.ctx.gameover.winner} won`;
    }
  };

  _renderFooter = () => {
    const btnStyles = {
      marginTop: '10px',
      alignContent: 'center',
    };

    const stars = new Array(MAX_BINGO_CALLS)
      .fill('⭐')
      .map((s, idx) => (this.props.G.players[this._getPlayerID()].shoutCount > idx ? s : '✰'));

    return (
      <div style={{ display: 'flex' }}>
        <Button
          key="bi_call_table_btn"
          variant="contained"
          data-testid="bingo-table-btn"
          color="primary"
          style={{
            ...btnStyles,
            justifyContent: 'left',
          }}
          onClick={() => this.setState({ showCallTable: !this.state.showCallTable })}
        >
          Table
        </Button>
        <Button
          key="bi_shout_btn"
          variant="contained"
          data-testid="bingo-shout-btn"
          color="primary"
          style={{
            ...btnStyles,
            marginLeft: 'auto',
            justifyContent: 'right',
          }}
          onClick={this._shoutBingo}
        >
          Bingo! {stars.join('')}
        </Button>
      </div>
    );
  };

  _renderPlayComponents = (gameOver = false) => {
    const { callQueue, callRef, players, timeRef, activePlayers } = this.props.G;
    let playCard = (
      <PlayCard
        numbers={players[gameOver ? this.props.ctx.gameover.winner : this._getPlayerID()].numbers}
        onNumberClicked={gameOver ? () => {} : this._numberClicked}
      />
    );
    // if player has no Bingo! shouts left, then show special message
    if (!gameOver && players[this._getPlayerID()].shoutCount <= 0) {
      const msgLineHeight = 0.5;
      playCard = (
        <text
          key={`bi_bingo_call_over_text`}
          x="50%"
          y={CALL_BOX_SIZE + 1.5}
          fill="white"
          textAnchor="middle"
          fontSize={msgLineHeight * 0.8}
        >
          <tspan x="50%" dy="0">
            Sorry, you used up
          </tspan>
          <tspan x="50%" dy={msgLineHeight}>
            all your Bingo! calls ☹️
          </tspan>
          <tspan x="50%" dy={msgLineHeight * 2}>
            Better luck next time !
          </tspan>
        </text>
      );
    }

    // calculate backOff based on the list of activePlayers
    // first person is 0 ms, then 500 ms, ..., and the rest will have max 500*length ms
    const backOff =
      BACKOFF_INTERVAL *
      (activePlayers.includes(this._getPlayerID()) ? activePlayers.indexOf(this._getPlayerID()) : activePlayers.length);

    return (
      <>
        <Countdown
          key={`bi_counter_${timeRef}`}
          callRef={callRef}
          backOff={backOff}
          duration={callQueue[callRef] === INITIAL_WAIT_REF_NUM ? INITIAL_WAIT_TIME : TIME_OUT}
          timeRef={timeRef}
          callOnTimeout={gameOver ? () => {} : this._callOnTimeout}
        />
        <CallCard callQueue={callQueue} callRef={callRef} />
        {this.state.showCallTable ? <CallTable callQueue={callQueue} callRef={callRef} /> : playCard}
      </>
    );
  };

  _renderBoard = (gameOver = false) => {
    return (
      <svg
        width={`${(gameOver ? 0.5 : 1) * 100}%`}
        height={`${(gameOver ? 0.5 : 1) * 140}%`}
        viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE + CALL_BOX_SIZE}`}
        style={{ backgroundColor: 'black', display: 'block', margin: 'auto' }}
      >
        {this._renderPlayComponents(gameOver)}
      </svg>
    );
  };

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._gameOverStatus()}
          extraCardContent={this.props.ctx.gameover.draw ? null : this._renderBoard(true)}
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        {this._renderBoard()}
        {this._renderFooter()}
      </GameLayout>
    );
  }
}
