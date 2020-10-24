import React from 'react';
import { grey } from '@material-ui/core/colors';
import soupCSS from './soup.css';
import { orientations } from './puzzel';
import { ISingleLetter, ISolvedWord } from './game';
import { playerColors, BOARD_SIZE, SOLUTION_COLOR } from './constants';

interface ISoupProps {
  puzzel: Array<Array<string>>;
  solution: Array<ISolvedWord>;
  currentPlayer: string;
  wordFoundCallback?: (solvedWord: ISolvedWord) => void;
  isGameOver: boolean;
}

interface IBoardConfig {
  height: number;
  width: number;
  letterHeight: number;
  letterWidth: number;
}

interface ISoupState {
  selectedLetters: Array<ISingleLetter>;
  boardConfig: IBoardConfig;
  probableWord?: ISolvedWord;
  highlightLetter: ISingleLetter | null;
}

export class Soup extends React.Component<ISoupProps, ISoupState> {
  constructor(props) {
    super(props);

    const { puzzel } = this.props;
    const letterHeight = Math.floor(BOARD_SIZE / puzzel.length);
    const letterWidth = Math.floor(BOARD_SIZE / puzzel[0].length);

    // initialize state
    this.state = {
      selectedLetters: [],
      boardConfig: {
        letterHeight,
        letterWidth,
        height: letterHeight * puzzel.length,
        width: letterWidth * puzzel[0].length,
      },
      highlightLetter: null,
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg
          width={`${this.props.isGameOver ? 50 : 100}%`}
          height={`${this.props.isGameOver ? 50 : 100}%`}
          viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
          pointerEvents="visible"
          style={{ marginTop: '10px', padding: '0 5px' }}
        >
          <g>
            {this._placeLetters()}
            {this._placeRectOverLetters()}
          </g>
        </svg>
      </div>
    );
  }

  _getHighlightColor(x, y, letter) {
    // if belongs to a user, give user specific color back
    for (const sl of this.props.solution) {
      for (const l of sl.letters) {
        if (l.x === x && l.y === y && l.letter == letter) {
          if (sl.solvedBy) {
            return playerColors[sl.solvedBy];
          } else if (this.props.isGameOver && sl.solvedBy === undefined) {
            return SOLUTION_COLOR;
          }
        }
      }
    }

    const { highlightLetter, probableWord } = this.state;

    // if highlighted
    if (highlightLetter && highlightLetter.x === x && highlightLetter.y === y) {
      return playerColors[this.props.currentPlayer];
    }

    // if selected in state, give color of player who selected the first letter
    for (const sl of this.state.selectedLetters) {
      if (sl.x === x && sl.y === y) {
        return playerColors[probableWord.solvedBy];
      }
    }

    return 'black';
  }

  _placeLetters() {
    // calculate hight and width of each letter
    const puzzel = this.props.puzzel;
    const lHeight = this.state.boardConfig.letterHeight;
    const lWidth = this.state.boardConfig.letterWidth;
    const fontSize = 0.75 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    puzzel.forEach((yList, yId) => {
      yList.forEach((l, xId) => {
        // square around the letter
        cells.push(
          <rect
            key={'color-square-' + xId + '-' + yId}
            x={xId * lWidth}
            y={yId * lHeight}
            width={lWidth}
            height={lWidth}
            fill={this._getHighlightColor(xId, yId, l)}
            stroke={grey[500]}
            strokeWidth={0.05 * fontSize}
          />,
        );
        // letter inside the square
        cells.push(
          <text
            key={'soup-letter-' + xId + '-' + yId}
            className={soupCSS.noselect}
            x={(xId + 0.5) * lWidth}
            y={(yId + 0.8) * lHeight}
            fontSize={fontSize}
            fontFamily="sans-serif"
            fill={grey[200]}
            textAnchor="middle"
          >
            {l}
          </text>,
        );
      });
    });
    return cells;
  }

  _resolveLetterAndCoordinates = (event) => {
    const { puzzel } = this.props;
    const bounds = event.target.getBoundingClientRect();
    const coordinates = event.touches ? event.touches[0] : event;
    const x = Math.floor(((coordinates.clientX - bounds.left) / bounds.width) * puzzel.length);
    const y = Math.floor(((coordinates.clientY - bounds.top) / bounds.height) * puzzel[0].length);
    if (y >= 0 && x >= 0) {
      const letter = puzzel[y][x];
      return { x, y, letter };
    } else {
      return {};
    }
  };

  _handleLetterClick = (event: any, callType: string) => {
    const { x, y, letter } = this._resolveLetterAndCoordinates(event);
    if (!letter) {
      return;
    }

    const highlightLetter = { x, y, letter };
    let probableWord = this.state.probableWord;

    if (probableWord) {
      // check if the same players is still playing, else remove selections
      if (probableWord.solvedBy != this.props.currentPlayer) {
        this.setState({ selectedLetters: [], probableWord: undefined, highlightLetter: null });
        return;
      }

      // check if the letter selected currently is properly oriented or not
      const selectedLetters = [...this.state.selectedLetters];
      const lastSl = selectedLetters[selectedLetters.length - 1];
      const nextSl = orientations[probableWord.orientation](lastSl.x, lastSl.y, 1);

      // if not equal, clear the state for start or simply return for move
      if (nextSl.x != x || nextSl.y != y) {
        if (callType === 'start') {
          // do nothing, if the letter has already been included in the list of selected letter
          for (let sl of selectedLetters) {
            if (sl.x === x && sl.y === y) {
              return;
            }
          }
          this.setState({ probableWord: undefined, selectedLetters: [], highlightLetter });
        }
        return;
      }

      // if orientation is proper, append letter to the list of selected words
      selectedLetters.push({ x, y, letter });

      // if the complete word has been selected, then dont go further
      if (selectedLetters.length >= probableWord.word.length) {
        this.props.wordFoundCallback(this.state.probableWord);
        this.setState({ selectedLetters: [], probableWord: undefined, highlightLetter: null });
        return;
      }

      // update state
      this.setState({ selectedLetters });
    } else {
      // check if the current selection is a probable start of the word
      if (callType === 'start') {
        for (const s of this.props.solution) {
          if (s.x === x && s.y === y) {
            if (s.solvedBy) {
              return; // the word is already found by another player
            }
            probableWord = { ...s };
            break;
          }
        }
      }

      if (probableWord) {
        // create a new list of selectedLetters
        const selectedLetters = [{ x, y, letter }];
        probableWord.solvedBy = this.props.currentPlayer;
        this.setState({ highlightLetter, probableWord, selectedLetters });
      } else if (callType === 'start') {
        this.setState({ highlightLetter });
      }
    }
  };

  _placeRectOverLetters() {
    const { width, height } = this.state.boardConfig;

    return (
      <rect
        key="sol_interaction_rect"
        x={0}
        y={0}
        width={width}
        height={height}
        style={{ opacity: 0 }}
        onMouseDown={(event) => this._handleLetterClick(event, 'start')}
        onMouseMove={(event) => this._handleLetterClick(event, 'move')}
        onTouchStart={(event) => this._handleLetterClick(event, 'start')}
        onTouchMove={(event) => this._handleLetterClick(event, 'move')}
      >
        {' '}
      </rect>
    );
  }

  //
  // Functions below will be deprecated
  //

  _selectWordStart = (xId: number, yId: number, letter: string) => {
    let probableWord = this.state.probableWord;
    // if a probable word already selected, then return
    if (probableWord) {
      return;
    }

    for (const s of this.props.solution) {
      if (s.x === xId && s.y === yId) {
        if (s.solvedBy) {
          return; // the word is already found by another player
        }
        probableWord = { ...s };
        break;
      }
    }
    // is no probable word found, return
    if (!probableWord) {
      return;
    }

    // create a new list of selectedLetters
    const selectedLetters = [{ x: xId, y: yId, letter }];
    probableWord.solvedBy = this.props.currentPlayer;
    this.setState({ selectedLetters, probableWord });
  };

  _selectWordContent = (xId: number, yId: number, letter: string) => {
    // console.log('event: ', event, letter);

    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord;
    if (!probableWord) {
      return;
    }

    // check if the same players is still playing, else remove selections
    if (probableWord.solvedBy != this.props.currentPlayer) {
      this.setState({ selectedLetters: [], probableWord: undefined });
      return;
    }

    // check if the letter selected currently is properly oriented or not
    const selectedLetters = this.state.selectedLetters.slice();
    const lastSl = selectedLetters[selectedLetters.length - 1];
    const nextSl = orientations[probableWord.orientation](lastSl.x, lastSl.y, 1);

    // if not equal return,
    if (nextSl.x != xId || nextSl.y != yId) {
      return;
    }

    // if orientation is proper, append letter to the list of selected words
    selectedLetters.push({ x: xId, y: yId, letter });

    // if the complete word has been selected, then dont go further
    if (selectedLetters.length >= probableWord.word.length) {
      this.props.wordFoundCallback(this.state.probableWord);
      this.setState({ selectedLetters: [], probableWord: undefined });
      return;
    }

    // update state
    this.setState({ selectedLetters });
  };

  _endWordSelections = () => {
    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord;
    if (!probableWord) {
      return;
    }

    // check if the same players is still playing, else remove selections
    if (probableWord.solvedBy != this.props.currentPlayer) {
      this.setState({ selectedLetters: [], probableWord: undefined });
      return;
    }

    // recreate selected word,
    let selectedWord = '';
    for (const sl of this.state.selectedLetters) {
      selectedWord = selectedWord + sl.letter;
    }

    if (selectedWord === this.state.probableWord.word) {
      // update game state
      this.props.wordFoundCallback(this.state.probableWord);
    }

    // remove selections
    this.setState({ selectedLetters: [], probableWord: undefined });
  };
}
