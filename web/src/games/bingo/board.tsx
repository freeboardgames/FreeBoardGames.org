import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isOnlineGame } from 'gamesShared/helpers/gameMode';
import { Button } from '@material-ui/core';

import { IBoardProps, IBoardState, INumberState } from './definitions';
import { GRID_SIZE, CALL_BOX_SIZE, MAX_BINGO_CALLS } from './constants';
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

  _getPlayerID = () => this.props.playerID || this.props.ctx.currentPlayer;

  _callOnTimeout = () => {
    if (this._getPlayerID() === '0') {
      this.props.moves.incrementCallRef();
    }
  };

  _numberClicked = (number: INumberState) => {
    this.props.moves.playerClickedNumber(number, this._getPlayerID());
  };

  _shoutBingo = () => {
    this.props.moves.playerShouted(this._getPlayerID());
  };

  _gameOverStatus = () => {
    if (this.props.ctx.gameover.draw) {
      return 'draw';
    }
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return 'you won';
      } else {
        return 'you lost';
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
    let playCard = (
      <PlayCard
        numbers={this.props.G.players[gameOver ? this.props.ctx.gameover.winner : this._getPlayerID()].numbers}
        onNumberClicked={gameOver ? () => {} : this._numberClicked}
      />
    );
    if (!gameOver && this.props.G.players[this._getPlayerID()].shoutCount <= 0) {
      playCard = (
        <text key={`bi_bingo_call_over_text`} x={0.2} y={3} fill="white" fontSize={0.45}>
          Not allowed to play
        </text>
      );
    }
    return (
      <>
        <Countdown
          key={`bi_counter_${this.props.G.timeRef}`}
          timeRef={this.props.G.timeRef}
          callOnTimeout={gameOver ? () => {} : this._callOnTimeout}
        />
        <CallCard callQueue={this.props.G.callQueue} callRef={this.props.G.callRef} />
        {this.state.showCallTable ? (
          <CallTable callQueue={this.props.G.callQueue} callRef={this.props.G.callRef} />
        ) : (
          playCard
        )}
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
