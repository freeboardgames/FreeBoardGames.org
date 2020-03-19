import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import { EnterWordPrompt } from './EnterWordPrompt';
import { isOnlineGame } from '../common/gameMode';
import { grey } from '@material-ui/core/colors';
import { Modal, Button } from '@material-ui/core';

interface IBoardState {
  modalState: boolean;
}

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  step?: any;
  events?: any;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
    this._setWordForOpponent = this._setWordForOpponent.bind(this);
    this.state = {
      modalState: false,
    };
  }

  onClick = (letter: string) => () => {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        return;
      }
    }

    this.props.moves.letterSelected(letter);

    // change turns only if the user is done guessing
    const currentPlayer = this.props.ctx.currentPlayer;
    const nextPlayer = currentPlayer === '0' ? '1' : '0';
    const playerStatus = this.props.G.status[currentPlayer];

    // check if current player is done
    if (!playerStatus.correctGuess.includes('_')) {
      this.props.events.endTurn({ next: nextPlayer });
    } else {
      this.props.events.endTurn({ next: currentPlayer });
    }
  };

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'Your Turn to GUESS';
      } else {
        return 'Opponent is Guessing';
      }
    } else {
      const currentPlayer = this.props.ctx.currentPlayer === '0' ? '1' : '2';
      return 'Player ' + currentPlayer + "'s Turn";
    }
  }

  _getWord() {
    const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
    const word = playerStatus.correctGuess;
    const breakLen = 8;
    const cells = [];

    // max 2 lines are allowed, each with max 8 characters
    for (var y = 0; y < 2; y++) {
      // decide the offset based on number of letters in current line
      let charsOnLine = word.length - y * breakLen;
      let xOffset = 5 - (charsOnLine < breakLen ? charsOnLine : breakLen) / 2;
      let numOfLines = Math.ceil(word.lenth / breakLen);
      let yOffset = 1.5 + (1 + y) * 0.3 + (numOfLines === 1 ? 1.5 : 0);

      for (var x = 0; x < breakLen; x++) {
        const idx = y * breakLen + x;
        if (idx >= word.length) break;
        var letter = word[idx];
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
              {letter !== '_' ? letter.toUpperCase() : ' '}
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

  _getAlphabets() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cells = [];
    const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
    for (var i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i].toUpperCase();
      let backgroundColor = null;
      let textColor: any = grey[100];
      if (isOnlineGame(this.props.gameArgs)) {
        textColor = this.props.playerID === this.props.ctx.currentPlayer ? grey[100] : grey[500];
      }
      if (playerStatus.correctGuess.indexOf(alphabet[i]) > -1) {
        backgroundColor = '#00e676';
        textColor = grey[100];
      } else if (playerStatus.wrongGuess.indexOf(alphabet[i]) > -1) {
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
        <g key={'alph_group' + i} onClick={this.onClick(alphabet[i])} data-test-id={`letter-${letter}`}>
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
            {alphabet[i].toUpperCase()}
          </text>
        </g>,
      );
    }
    return cells;
  }

  _getHintButton() {
    let hintButton = (
      <g key={'hint_button'} onClick={() => this.setState({ modalState: true })}>
        <rect key={'hb_rect'} x={3.7} y={9} width={2.6} height={0.8} strokeWidth={0.045} stroke={grey[200]} />
        <text key={'hb_text'} x={5} y={9.55} fontSize={0.45} fill={grey[200]} textAnchor="middle">
          {'See Hint'}
        </text>
      </g>
    );
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        hintButton = null;
      }
    }
    return hintButton;
  }

  _getHintModal() {
    const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          BackdropProps={{ invisible: true }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
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
              {playerStatus.wordHint}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }

  _setWordForOpponent(word: string, hint: string) {
    this.props.moves.setWords(word, hint);
    this.props.events.endTurn({ next: this.props.ctx.currentPlayer === '0' ? '1' : '0' });
  }

  _showConclusion() {
    const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
    const guessOutcome = playerStatus.wrongGuess.length >= 10 ? 'INCORRECT' : 'CORRECT';
    let guessMessage = `Your guess was ${guessOutcome}.`;
    let extraMessage =
      playerStatus.wrongGuess.length >= 10
        ? `The word to be guessed was ${playerStatus.correctGuess.toUpperCase()}.`
        : `Your score is ${playerStatus.score} points.`;
    let nextButton = (
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '16px', marginLeft: 'auto', marginRight: 'auto', alignContent: 'center' }}
        onClick={this.onClick('*')}
        data-test-id="next-button"
      >
        Next
      </Button>
    );
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        guessMessage = `Your opponent's guess was ${guessOutcome}.`;
        extraMessage = `Your opponent has scored ${playerStatus.score} points.`;
        nextButton = null;
      }
    }
    let textColor = 'white';
    if (this.props.ctx.currentPlayer === '1') {
      nextButton = null;
      textColor = 'black';
    }
    return (
      <div>
        <Typography variant="h6" style={{ textAlign: 'center', color: textColor, margin: '16px', padding: '16px' }}>
          {guessMessage}
          <br />
          {extraMessage}
          <br />
          {nextButton}
        </Typography>
      </div>
    );
  }

  _getBoard() {
    let toShow = null;
    // if the words are not available, ask players to enter them
    if (this.props.G.status['0'].correctGuess.length === 0 || this.props.G.status['1'].correctGuess.length === 0) {
      const otherPlayer = this.props.ctx.currentPlayer === '0' ? '1' : '0';
      if (isOnlineGame(this.props.gameArgs)) {
        if (
          this.props.playerID === this.props.ctx.currentPlayer &&
          this.props.G.status[otherPlayer].correctGuess.length === 0
        ) {
          toShow = <EnterWordPrompt setEnterWord={this._setWordForOpponent} promptTitle={'Enter Word to Guess'} />;
        } else {
          toShow = (
            <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
              Waiting for the Opponent to Enter a Word for you ...
            </Typography>
          );
        }
      } else {
        toShow = (
          <EnterWordPrompt
            key={'prompt_key_' + otherPlayer}
            setEnterWord={this._setWordForOpponent}
            promptTitle={'Player ' + (this.props.ctx.currentPlayer === '0' ? '1' : '2') + ': Enter Word'}
          />
        );
      }
    } else {
      // show conclusion when player has finished guessing
      const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
      if (!playerStatus.correctGuess.includes('_')) {
        toShow = this._showConclusion();
      } else {
        toShow = (
          <div>
            <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
              {this._getStatus()}
            </Typography>
            <svg width="100%" height="100%" viewBox="0 0 10 10">
              {this._getWord()}
              {this._getAlphabets()}
              {this._getHintButton()}
            </svg>
            {this._getHintModal()}
          </div>
        );
      }
    }

    return <div>{toShow}</div>;
  }

  _getGameOver() {
    // Online game
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        return 'draw';
      }
    } else {
      // Local game
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return 'Player 1 won';
        case '1':
          return 'Player 2 won';
        case undefined:
          return 'draw';
      }
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout gameOver={this._getGameOver()} extraCardContent={this._getBoard()} gameArgs={this.props.gameArgs} />
      );
    }
    return <GameLayout gameArgs={this.props.gameArgs}>{this._getBoard()}</GameLayout>;
  }
}

export default Board;
