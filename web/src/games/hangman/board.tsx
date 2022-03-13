import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import Typography from '@material-ui/core/Typography';
import { isSpectator } from 'gamesShared/helpers/GameUtil';
import { EnterWordPrompt } from './EnterWordPrompt';
import css from './board.module.css';
import { isOnlineGame } from '../../gamesShared/helpers/gameMode';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { grey } from '@material-ui/core/colors';
import { Modal, Button } from '@material-ui/core';
import { isPlayersTurn } from 'gamesShared/helpers/GameUtil';
import { Ctx } from 'boardgame.io';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { HangmanState, PlayerState } from './definitions';
import { getOpponent, getMistakeCount, getMaskedWord, isGuessCorrect, getScore, isDoneGuessing } from './util';
import { ALPHABET, MAX_MISTAKE_COUNT, MAX_WORD_LENGTH } from './constants';

interface IBoardInnerProps extends WithCurrentGameTranslation {}

interface IBoardState {
  showHint: boolean;
}

export interface IBoardProps {
  G: HangmanState;
  ctx: Ctx;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  events?: any;
}

export class BoardInternal extends React.Component<IBoardProps & IBoardInnerProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown, false);
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
        return this.props.translate('board.your_turn');
      } else {
        return this.props.translate('board.playerName_is_guessing', { playerName: this._playerName() });
      }
    } else {
      return this.props.translate('board.player_turn', { playerName: this._playerName() });
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

  _getGuessesRemaining() {
    const mistakeCount = getMistakeCount(this._playerState().guesses);
    let textColor: any = grey[100];
    if (isOnlineGame(this.props.gameArgs)) {
      textColor = this.props.playerID === this.props.ctx.currentPlayer ? grey[100] : grey[500];
    }

    return (
      <text key={'guess_remaining_message'} x={5} y={4.5} fontSize={0.4} textAnchor="middle" fill={textColor}>
        {this.props.translate('board.mistakes', { mistakeCount, MAX_MISTAKE_COUNT })}
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
        <g key={'alph_group' + i} onClick={this.onClick(letter)} data-testid={`letter-${letter}`}>
          <circle
            key={'alph_rect_' + i}
            cx={x + 0.5}
            cy={y + 0.5}
            r={0.45}
            fill={backgroundColor}
            strokeWidth={0.045}
            stroke={textColor}
            data-testid={`letter-${letter}-cir`}
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
    if (isOnlineGame(this.props.gameArgs) && this.props.playerID !== this.props.ctx.currentPlayer) {
      return;
    }
    if (!this._opponentState().hint) {
      return;
    }
    return (
      <g key={'hint_button'} onClick={() => this.setState({ showHint: true })}>
        <rect key={'hb_rect'} x={3.7} y={9} width={2.6} height={0.8} strokeWidth={0.045} stroke={grey[200]} />
        <text key={'hb_text'} x={5} y={9.55} fontSize={0.45} fill={grey[200]} textAnchor="middle">
          {this.props.translate('board.see_hint')}
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
              {this.props.translate('board.hint')}
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
    if (isOnlineGame(this.props.gameArgs)) {
      return this.props.gameArgs.players[this.props.ctx.currentPlayer].name;
    }
    switch (this.props.ctx.currentPlayer) {
      case '0':
        return this.props.translate('board.player_a');
      case '1':
        return this.props.translate('board.player_b');
    }
    return '?'; // so TS doesn't think our type is string|undefined
  }

  _renderPrepare() {
    if (!isPlayersTurn(this.props.playerID, this.props.ctx) && isOnlineGame(this.props.gameArgs)) {
      return (
        <Typography variant="h6" style={{ textAlign: 'center', color: 'white', margin: '16px', padding: '16px' }}>
          {this.props.translate('board.waiting_player', { playerName: this._playerName() })}
        </Typography>
      );
    }
    const translate_title_key = isOnlineGame(this.props.gameArgs) ? 'enter_secret_word' : 'enter_word';
    const title = this.props.translate(`board.player.${translate_title_key}`, { playerName: this._playerName() });
    return <EnterWordPrompt setSecret={this._setSecret} title={title} />;
  }

  _changeTurn = () => () => {
    this.props.events.endTurn();
  };

  _showConclusion() {
    const player = this.props.G.players[this.props.ctx.currentPlayer];
    const opponent = this._opponentState();
    const translate_guessOutcome_key = isGuessCorrect(this.props.G, this.props.ctx.currentPlayer)
      ? 'correct'
      : 'incorrect';
    const guessOutcome = this.props.translate(`board.${translate_guessOutcome_key}`);
    let guessMessage = this.props.translate('board.your_guess_outcome', { guessOutcome });
    let extraMessage = isGuessCorrect(this.props.G, this.props.ctx.currentPlayer)
      ? this.props.translate('board.extra_your_score', { score: getScore(player.guesses) })
      : this.props.translate('board.extra_word_to_guess', { secret: opponent.secret.toUpperCase() });
    let nextButton = (
      <Button
        key="key_hangman_next"
        id="id_hangman_next"
        variant="contained"
        color="primary"
        style={{ marginTop: '16px', marginLeft: 'auto', marginRight: 'auto', alignContent: 'center' }}
        onClick={this._changeTurn()}
        data-test-id="next-button"
      >
        {this.props.translate('board.button_next')}
      </Button>
    );
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID !== this.props.ctx.currentPlayer) {
        guessMessage = this.props.translate('board.guess_message', { playerName: this._playerName(), guessOutcome });
        extraMessage = this.props.translate('board.extraMessage', {
          playerName: this._playerName(),
          score: getScore(player.guesses),
        });
        nextButton = null;
      }
    }

    const scores: IScore[] = this.props.gameArgs.players.map((player, i) => {
      const hangmanPlayer = this.props.G.players[i];
      return { playerID: `${player.playerID}`, score: getScore(hangmanPlayer.guesses) };
    });
    let scoreBoard = null;
    if (this.props.ctx.currentPlayer === '1') {
      nextButton = null;
      scoreBoard = (
        <Scoreboard scoreboard={scores} players={this.props.gameArgs.players} playerID={this.props.ctx.playerID} />
      );
    }

    return (
      <Typography variant="h6" className={css.scoreLayout}>
        {guessMessage}
        <br />
        {extraMessage}
        {scoreBoard}
        <br />
        {nextButton}
      </Typography>
    );
  }

  _renderPlay() {
    return !isDoneGuessing(this.props.G, this.props.ctx.currentPlayer) ? (
      <div>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <svg width="100%" height="100%" viewBox="0 0 10 10">
          {this._getWord()}
          {this._getGuessesRemaining()}
          {this._getAlphabets()}
          {this._getHintButton()}
        </svg>
        {this._getHintModal()}
      </div>
    ) : (
      <div> {this._showConclusion()} </div>
    );
  }

  _getGameOver() {
    if (this.props.ctx.gameover.draw) {
      return this.props.translate('board.game_over.draw');
    }
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.ctx.gameover.winner === this.props.playerID) {
        return this.props.translate('board.game_over.you_won');
      } else {
        if (isSpectator(this.props.playerID)) {
          return this.props.translate('board.game_over.spectator');
        }
        return this.props.translate('board.game_over.you_lost');
      }
    } else {
      return this.props.translate('board.game_over.player_won', { playerName: this._playerName() });
    }
  }

  _handleKeyDown = (event: KeyboardEvent) => {
    if (this.props.ctx.phase === 'play' && ALPHABET.includes(event.key)) {
      this.onClick(event.key)();
    }
  };

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={this._getGameOver()}
          extraCardContent={this._showConclusion()}
          gameArgs={this.props.gameArgs}
        />
      );
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        {this.props.ctx.phase === 'prepare' ? this._renderPrepare() : this._renderPlay()}
      </GameLayout>
    );
  }
}

const enhance = compose<IBoardProps, IBoardInnerProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
