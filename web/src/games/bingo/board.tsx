import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isOnlineGame } from 'gamesShared/helpers/gameMode';
import { Button } from '@material-ui/core';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';

import { IBoardOutterProps, IBoardState, INumberState, IBoardInnerProps } from './definitions';
import {
  GRID_SIZE,
  CALL_BOX_SIZE,
  MAX_BINGO_CALLS,
  TIME_OUT,
  INITIAL_WAIT_REF_NUM,
  INITIAL_WAIT_TIME,
  BACKOFF_INTERVAL,
} from './constants';
import { getFromSessionStore, setInSessionStore } from './utils';
import PlayCard from './components/playCard';
import CallCard from './components/callCard';
import Countdown from './components/countDown';
import CallTable from './components/callTable';
import { withCurrentGameTranslation, Trans } from 'infra/i18n';
import { compose } from 'recompose';

export class BingoBoardInternal extends React.Component<IBoardInnerProps & IBoardOutterProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = {
      showCallTable: false,
      idNumbersSelected: getFromSessionStore(this.props.gameArgs.matchCode, 'idNumbersSelected') || [],
    };
  }

  _getPlayerID = () => (isOnlineGame(this.props.gameArgs) ? this.props.playerID : this.props.ctx.currentPlayer);

  _isFirstPerson = () => isFirstPersonView(this.props.gameArgs, this.props.playerID);

  _callOnTimeout = (callRef: number) => {
    if (this._isFirstPerson() && callRef >= this.props.G.callRef) {
      this.props.moves.incrementCallRef(this._getPlayerID(), true);
    }
  };

  _numberClicked = (number: INumberState) => {
    let idNumbersSelected;
    if (this.state.idNumbersSelected.includes(number.id)) {
      idNumbersSelected = this.state.idNumbersSelected.filter((n) => n !== number.id);
    } else {
      idNumbersSelected = [...this.state.idNumbersSelected, number.id];
    }
    setInSessionStore(this.props.gameArgs.matchCode, 'idNumbersSelected', idNumbersSelected);
    this.setState({ idNumbersSelected });
  };

  _markLocallySelectedNumbers = (gameOver: boolean) => {
    if (gameOver) {
      return this.props.G.players[this.props.ctx.gameover.winner].numbers;
    } else {
      return this.props.G.players[this._getPlayerID()].numbers.map((n) => ({
        ...n,
        marked: this.state.idNumbersSelected.includes(n.id),
      }));
    }
  };

  _shoutBingo = () => {
    this.props.moves.playerShouted(this._getPlayerID(), this.state.idNumbersSelected);
  };

  _getPlayerName = (playerID = null) => {
    if (isOnlineGame(this.props.gameArgs)) {
      return this.props.gameArgs.players[playerID === null ? this.props.ctx.currentPlayer : playerID].name;
    }
    return this.props.translate('player', { name: this.props.ctx.currentPlayer });
  };

  _gameOverStatus = () => {
    if (this.props.ctx.gameover.draw) {
      return this.props.translate('draw');
    }
    if (isOnlineGame(this.props.gameArgs)) {
      if (!this._isFirstPerson()) {
        return this.props.translate('winner', { name: this._getPlayerName(this.props.ctx.gameover.winner) });
      }
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return this.props.translate('you_won');
      } else {
        return this.props.translate('you_lost', { name: this._getPlayerName(this.props.ctx.gameover.winner) });
      }
    } else {
      return this.props.translate('player_won', { name: this.props.ctx.gameover.winner });
    }
  };

  _renderFooter = () => {
    if (!this._isFirstPerson()) {
      return null;
    }

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
          {this.props.translate('table')}
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
          {this.props.translate('bingo', { stars: stars.join('') })}
        </Button>
      </div>
    );
  };

  _renderPlayComponents = (gameOver = false) => {
    const { callQueue, callRef, players, timeRef, activePlayers } = this.props.G;
    let playCard = this._isFirstPerson() ? (
      <PlayCard
        numbers={this._markLocallySelectedNumbers(gameOver)}
        onNumberClicked={gameOver ? () => {} : this._numberClicked}
      />
    ) : null;
    // if player has no Bingo! shouts left, then show special message
    if (this._isFirstPerson() && !gameOver && players[this._getPlayerID()].shoutCount <= 0) {
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
          <Trans
            t={this.props.translate}
            i18nKey="sorry_you_used_up"
            components={{
              0: <tspan x="50%" dy="0" />,
              1: <tspan x="50%" dy={msgLineHeight} />,
              2: <tspan x="50%" dy={msgLineHeight * 2} />,
            }}
          />
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
          key={`bi_counter`}
          callRef={callRef}
          backOff={backOff}
          duration={callQueue[callRef] === INITIAL_WAIT_REF_NUM ? INITIAL_WAIT_TIME : TIME_OUT}
          timeRef={timeRef}
          callOnTimeout={gameOver ? () => {} : this._callOnTimeout}
        />
        <CallCard callQueue={callQueue} callRef={callRef} isSpectator={!this._isFirstPerson()} />
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

const enhance = compose<IBoardInnerProps, IBoardOutterProps>(withCurrentGameTranslation);

export const BingoBoard = enhance(BingoBoardInternal);
