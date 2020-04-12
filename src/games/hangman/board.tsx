import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import { EnterWordPrompt } from './EnterWordPrompt';
import { isOnlineGame } from '../common/gameMode';
import { grey } from '@material-ui/core/colors';
import { Modal, Button } from '@material-ui/core';
import { isPlayersTurn } from 'games/common/GameUtil';
import { IGameCtx } from 'boardgame.io/core';
import { HangmanState, PlayerState } from './definitions';
import { getOpponent, getMistakeCount, getMaskedWord } from './util';
import { ALPHABET, MAX_MISTAKE_COUNT, MAX_WORD_LENGTH } from './constants';

interface IBoardState {
  showHint: boolean;
}

interface IBoardProps {
  G: HangmanState;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  events?: any;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
    };
  }

  onClick = (letter: string) => () => {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        return;
      }
    }

    this.props.moves.selectLetter(letter);
  };

  _setSecret = (secret, hint) => {
    this.props.moves.setSecret(secret, hint);
  };

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'Your Turn to GUESS';
      } else {
        return 'Opponent is Guessing';
      }
    } else {
      return 'Player ' + this._playerName() + "'s Turn";
    }
  }

  _getWord() {
    const player = this._playerState();
    const opponent = this._opponentState();
    const BREAK_LEN = MAX_WORD_LENGTH / 2;
    const cells = [];

    // max 2 lines are allowed, each with BREAK_LEN characters
    for (var y = 0; y < 2; y++) {
      // decide the offset based on number of letters in current line
      let charsOnLine = opponent.secretLength - y * BREAK_LEN;
      let xOffset = 5 - (charsOnLine < BREAK_LEN ? charsOnLine : BREAK_LEN) / 2;
      let numOfLines = Math.ceil(opponent.secretLength / BREAK_LEN);
      let yOffset = 1.5 + (1 + y) * 0.3 + (numOfLines === 1 ? 1.5 : 0);

      for (var x = 0; x < BREAK_LEN; x++) {
        const idx = y * BREAK_LEN + x;
        if (idx >= opponent.secretLength) break;
        var letter = getMaskedWord(player.guesses, this._opponentState().secretLength)[idx];
        cells.push(
          <g key={'word_group' + idx}>
            <text
              key={'word_letter_' + idx}
              x={x + xOffset + 0.5}
              y={y + yOffset}
              fontSize={0.85}
              textAnchor="middle"
              fill="#40c4ff"
            >
              {letter ? letter.toUpperCase() : ' '}
            </text>
            <line
              x1={x + xOffset + 0.1}
              y1={y + yOffset + 0.25}
              x2={x + xOffset + 0.9}
              y2={y + yOffset + 0.25}
              stroke="#40c4ff"
              style={{ strokeWidth: 0.125 }}
            />
          </g>,
        );
      }
    }
    return cells;
  }

  _getGuesseRemaining() {
    const mistakeCount = getMistakeCount(this._playerState().guesses);
    let textColor: any = grey[100];
    if (isOnlineGame(this.props.gameArgs)) {
      textColor = this.props.playerID === this.props.ctx.currentPlayer ? grey[100] : grey[500];
    }

    return (
      <text key={'guess_remaining_message'} x={5} y={4.5} fontSize={0.4} textAnchor="middle" fill={textColor}>
        {`Mistakes: ${mistakeCount}/${MAX_MISTAKE_COUNT}`}
      </text>
    );
  }

  _getAlphabets() {
    const cells = [];
    for (var i = 0; i < ALPHABET.length; i++) {
      const letter = ALPHABET[i];
      let backgroundColor = null;
      let textColor: any = grey[100];
      if (isOnlineGame(this.props.gameArgs)) {
        textColor = this.props.playerID === this.props.ctx.currentPlayer ? grey[100] : grey[500];
      }
      const guessResult = this._playerState().guesses[letter];
      if (guessResult && guessResult.length > 0) {
        backgroundColor = '#00e676';
        textColor = grey[100];
      } else if (guessResult && guessResult.length == 0) {
        backgroundColor = '#ff1744';
        textColor = grey[100];
      }
      let lineNo = Math.floor(i / 9);
      let x = (i - 9 * lineNo) * 1.1 + 0.1;
      let y = 5 + lineNo * 1.2;
      if (i >= 18) {
        x = (i - 18) * 1.1 + 0.6;
      }
      cells.push(
        <g key={'alph_group' + i} onClick={this.onClick(letter)} data-test-id={`letter-${letter}`}>
          <circle
            key={'alph_rect_' + i}
            cx={x + 0.5}
            cy={y + 0.5}
            r={0.45}
            fill={backgroundColor}
            strokeWidth={0.045}
            stroke={textColor}
            data-test-id={`letter-${letter}-cir`}
          />
          <text key={'alph_' + i} x={x + 0.5} y={y + 0.5} fontSize={0.55} dy={0.2} fill={textColor} textAnchor="middle">
            {letter.toUpperCase()}
          </text>
        </g>,
      );
    }
    return cells;
  }

  _getHintButton() {
    if (isOnlineGame(this.props.gameArgs) && this.props.playerID === this.props.ctx.currentPlayer) {
      return;
    }
    if (!this._opponentState().hint) {
      return;
    }
    return (
      <g key={'hint_button'} onClick={() => this.setState({ showHint: true })}>
        <rect key={'hb_rect'} x={3.7} y={9} width={2.6} height={0.8} strokeWidth={0.045} stroke={grey[200]} />
        <text key={'hb_text'} x={5} y={9.55} fontSize={0.45} fill={grey[200]} textAnchor="middle">
          {'See Hint'}
        </text>
      </g>
    );
  }

  _playerState(): PlayerState {
    return this.props.G.players[this.props.ctx.currentPlayer];
  }

  _opponentState(): PlayerState {
    return this.props.G.players[getOpponent(this.props.ctx.currentPlayer)];
  }

  _getHintModal() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          BackdropProps={{ invisible: true }}
          open={this.state.showHint}
          onClose={() => this.setState({ showHint: false })}
          style={{
            marginTop: '20px',
            width: '250px',
            height: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
          }}
        >
          <div>
            <Typography style={{ padding: '16px' }} variant="h5" component="h3">
              Hint
            </Typography>
            <Typography style={{ padding: '16px' }} variant="body1">
              {this._opponentState().hint}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }

  _playerName() {
    switch (this.props.ctx.currentPlayer) {
      case '0':
        return 'A';
      case '1':
        return 'B';
    }
    return '?';
  }

  _renderPrepare() {
    if (!isPlayersTurn(this.props.ctx.currentPlayer, this.props.ctx)) {
      return (
        <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
          Waiting for the Opponent ...
        </Typography>
      );
    }
    const title = !isOnlineGame(this.props.gameArgs) ? `Player ${this._playerName()}: ` : '' + 'Enter secret word';
    return <EnterWordPrompt setSecret={this._setSecret} title={title} />;
  }

  _renderPlay() {
    return (
      <div>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <svg width="100%" height="100%" viewBox="0 0 10 10">
          {this._getWord()}
          {this._getGuesseRemaining()}
          {this._getAlphabets()}
          {this._getHintButton()}
        </svg>
        {this._getHintModal()}
      </div>
    );
  }

  _getGameOver() {
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
      return `Player ${this._playerName()} won!`;
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />;
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        {this.props.ctx.phase === 'prepare' ? this._renderPrepare() : this._renderPlay()}
      </GameLayout>
    );
  }
}

export default Board;
