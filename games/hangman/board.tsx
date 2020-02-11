import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import Typography from '@material-ui/core/Typography';
import { EnterWordPrompt } from './EnterWordPrompt';
import { isOnlineGame } from '../common/gameMode';
import { grey, red, blue } from '@material-ui/core/colors';
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
    this.props.moves.letterSelected(letter);

    // when online, change turns only if the user is done guessing
    if (isOnlineGame(this.props.gameArgs)) {
      const currentPlayer = this.props.ctx.currentPlayer;
      const nextPlayer = currentPlayer === '0' ? '1' : '0';
      const playerStatus = this.props.G.status[currentPlayer];

      // check if current player is done
      if (
        playerStatus.correctGuess.length > 0 &&
        (!playerStatus.correctGuess.includes('_') || playerStatus.wrongGuess.length >= 10)
      ) {
        this.props.events.endTurn({ next: nextPlayer });
      } else {
        this.props.events.endTurn({ next: currentPlayer });
      }
    }
  };

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.currentPlayer === this.props.playerID) {
        return 'Your Turn to GUESS';
      } else {
        return 'Opponent is Guessing';
      }
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
    const albhabets = 'abcdefghijklmnopqrstuvwxyz';
    const cells = [];
    const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
    for (var i = 0; i < albhabets.length; i++) {
      let backgroundColor = null;
      let textColor = this.props.playerID === this.props.ctx.currentPlayer ? grey[100] : grey[500];
      if (playerStatus.correctGuess.indexOf(albhabets[i]) > -1) {
        backgroundColor = '#00e676';
        textColor = grey[100];
      } else if (playerStatus.wrongGuess.indexOf(albhabets[i]) > -1) {
        backgroundColor = '#ff1744';
        textColor = grey[100];
      }
      let lineNo = Math.floor(i / 9);
      let x: number = (i - 9 * lineNo) * 1.1 + 0.1;
      let y: number = 5 + lineNo * 1.2;
      if (i >= 18) {
        x = (i - 18) * 1.1 + 0.6;
      }
      cells.push(
        <g key={'alph_group' + i} onClick={this.onClick(albhabets[i])}>
          <circle
            key={'alph_rect_' + i}
            cx={x + 0.5}
            cy={y + 0.5}
            r={0.45}
            fill={backgroundColor}
            strokeWidth={0.045}
            stroke={textColor}
          />
          <text key={'alph_' + i} x={x + 0.5} y={y + 0.5} fontSize={0.55} dy={0.2} fill={textColor} textAnchor="middle">
            {albhabets[i].toUpperCase()}
          </text>
        </g>,
      );
    }
    return cells;
  }

  _getHintButton() {
    let hintButton = null;
    if (this.props.playerID === this.props.ctx.currentPlayer) {
      hintButton = (
        <g key={'hint_button'} onClick={() => this.setState({ modalState: true })}>
          <rect key={'hb_rect'} x={3.7} y={9} width={2.6} height={0.8} strokeWidth={0.045} stroke={grey[200]} />
          <text key={'hb_text'} x={5} y={9.55} fontSize={0.45} fill={grey[200]} textAnchor="middle">
            {'See Hint'}
          </text>
        </g>
      );
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

  _showConclusion() {}

  _getBoard() {
    let toShow = null;

    // if the words are not available, ask players to enter them
    if (this.props.G.status['0'].correctGuess.length === 0 || this.props.G.status['1'].correctGuess.length === 0) {
      if (this.props.playerID === '0') {
        if (this.props.G.status['1'].correctGuess.length === 0 && this.props.ctx.currentPlayer === '0') {
          toShow = <EnterWordPrompt setEnterWord={this._setWordForOpponent} />;
        } else {
          toShow = (
            <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
              Waiting for the Opponent to Enter a Word for you ...
            </Typography>
          );
        }
      } else if (this.props.playerID === '1') {
        if (this.props.G.status['0'].correctGuess.length === 0 && this.props.ctx.currentPlayer === '1') {
          toShow = <EnterWordPrompt setEnterWord={this._setWordForOpponent} />;
        } else {
          toShow = (
            <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
              Waiting for the Opponent to Enter a Word for you ...
            </Typography>
          );
        }
      }
    } else {
      // show results if player has finished guessing
      const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
      if (!playerStatus.correctGuess.includes('_')) {
        const guessOutcome = playerStatus.wrongGuess.length >= 10 ? 'INCORRECT' : 'CORRECT';
        let guessMessage = `Your guess was ${guessOutcome}. The word to be guessed was ${playerStatus.correctGuess.toUpperCase()}.`;
        let nextButton = (
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '16px', marginLeft: 'auto', marginRight: 'auto', alignContent: 'center' }}
            onClick={this.onClick('*')}
          >
            Next
          </Button>
        );
        if (this.props.playerID !== this.props.ctx.currentPlayer) {
          guessMessage = `Your Opponent's guess was ${guessOutcome}.`;
          nextButton = null;
        }
        toShow =
          this.props.ctx.currentPlayer === '0' ? (
            <div>
              <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
                {guessMessage}
                <br />
                {nextButton}
              </Typography>
            </div>
          ) : null;
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
    }
  }

  _getGameOverBoard() {
    if (isOnlineGame(this.props.gameArgs)) {
      const playerStatus = this.props.G.status[this.props.ctx.currentPlayer];
      const guessOutcome = playerStatus.wrongGuess.length >= 10 ? 'INCORRECT' : 'CORRECT';
      let guessMessage = `Your guess was ${guessOutcome}. The word to be guessed was ${playerStatus.correctGuess.toUpperCase()}.`;
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        guessMessage = `Your Opponent's guess was ${guessOutcome}.`;
      }
      return (
        <div>
          <Typography
            variant="h6"
            style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px', backgroundColor: 'black' }}
          >
            {guessMessage}
          </Typography>
        </div>
      );
    }
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._getGameOverBoard()}
          gameArgs={this.props.gameArgs}
        />
      );
    }
    return <GameLayout gameArgs={this.props.gameArgs}>{this._getBoard()}</GameLayout>;
  }
}

export default Board;
