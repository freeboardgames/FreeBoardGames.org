import React from 'react';
import { grey } from '@material-ui/core/colors';
import soupCSS from './soup.module.css';
import { orientations } from './puzzle';
import { ISingleLetter, ISolvedWord } from './game';
import { playerColors, BOARD_SIZE, SOLUTION_COLOR } from './constants';

interface ISoupProps {
  puzzle: Array<Array<string>>;
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
  probableWords: ISolvedWord[];
  highlightLetter: ISingleLetter | null;
}

export class Soup extends React.Component<ISoupProps, ISoupState> {
  constructor(props) {
    super(props);

    const { puzzle } = this.props;
    const letterHeight = Math.floor(BOARD_SIZE / puzzle.length);
    const letterWidth = Math.floor(BOARD_SIZE / puzzle[0].length);

    // initialize state
    this.state = {
      selectedLetters: [],
      probableWords: [],
      boardConfig: {
        letterHeight,
        letterWidth,
        height: letterHeight * puzzle.length,
        width: letterWidth * puzzle[0].length,
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
    // if highlighted
    const { highlightLetter } = this.state;
    if (highlightLetter && highlightLetter.x === x && highlightLetter.y === y) {
      return playerColors[this.props.currentPlayer];
    }

    // if selected in state, give color of player who selected the first letter
    for (const sl of this.state.selectedLetters) {
      if (sl.x === x && sl.y === y) {
        return playerColors[this.props.currentPlayer];
      }
    }

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

    // // if developer wants to highlight start of word for debugging
    // for (const sl of this.props.solution) {
    //   if(sl.letters[0].x===x && sl.letters[0].y === y){
    //       return 'green';
    //   }
    // }

    return 'black';
  }

  _placeLetters() {
    // calculate hight and width of each letter
    const puzzle = this.props.puzzle;
    const lHeight = this.state.boardConfig.letterHeight;
    const lWidth = this.state.boardConfig.letterWidth;
    const fontSize = 0.75 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    puzzle.forEach((yList, yId) => {
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
            data-testid={`letter-sqr-${xId}-${yId}`}
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
    const { puzzle } = this.props;
    const bounds = event.target.getBoundingClientRect();
    const coordinates = event.touches ? event.touches[0] : event;
    const x = Math.floor(((coordinates.clientX - bounds.left) / bounds.width) * puzzle.length);
    const y = Math.floor(((coordinates.clientY - bounds.top) / bounds.height) * puzzle[0].length);
    if (y >= 0 && x >= 0 && y < puzzle.length && x < puzzle[y].length) {
      const letter = puzzle[y][x];
      return { x, y, letter };
    } else {
      return {};
    }
  };

  _handleLetterClick = (event: any, callType: string) => {
    event.preventDefault();
    const { x, y, letter } = this._resolveLetterAndCoordinates(event);
    if (!letter) {
      return;
    }

    const highlightLetter = { x, y, letter };
    let probableWords = [...this.state.probableWords];

    if (probableWords.length > 0) {
      // check if the same players is still playing, else remove selections
      for (const pWord of probableWords) {
        if (pWord.solvedBy != this.props.currentPlayer) {
          this.setState({ selectedLetters: [], probableWords: [], highlightLetter: null });
          return;
        }
      }

      // check if the letter selected currently is properly oriented or not
      const selectedLetters = [...this.state.selectedLetters];
      const lastSl = selectedLetters[selectedLetters.length - 1];
      let isNextLetter = false;
      let probableWord = null;
      for (const pWord of probableWords) {
        let nextSl = orientations[pWord.orientation](lastSl.x, lastSl.y, 1);
        if (nextSl.x == x && nextSl.y == y) {
          isNextLetter = true;
          // compare the entire list of selected letters to the probable word
          selectedLetters.forEach((sl, idx) => {
            if (sl.x != pWord.letters[idx].x || sl.y != pWord.letters[idx].y) {
              isNextLetter = false;
            }
          });
          // if it is confirmed that this is the next letter, then store ref to this word
          if (isNextLetter) {
            probableWord = pWord;
          }
        }
      }

      // if not the next letter, clear the state for start or simply return for move
      if (!isNextLetter) {
        if (callType === 'start') {
          // do nothing, if the letter has already been included in the list of selected letter
          for (let sl of selectedLetters) {
            if (sl.x === x && sl.y === y) {
              return;
            }
          }
          this.setState({ probableWords: [], selectedLetters: [], highlightLetter });
        }
        return;
      }

      // if orientation is proper, append letter to the list of selected words
      selectedLetters.push({ x, y, letter });

      // if the complete word has been selected, then dont go further
      if (selectedLetters.length >= probableWord.word.length) {
        this.props.wordFoundCallback(probableWord);
        this.setState({ selectedLetters: [], probableWords: [], highlightLetter: null });
        return;
      }

      // update state
      this.setState({ selectedLetters });
    } else {
      // check if the current selection is a probable start of the word
      if (callType === 'start') {
        for (const s of this.props.solution) {
          if (s.x === x && s.y === y) {
            if (!s.solvedBy) {
              // the word is already found by player, dont consider it
              probableWords.push({ ...s });
            }
          }
        }
      }

      if (probableWords.length > 0) {
        // create a new list of selectedLetters
        const selectedLetters = [{ x, y, letter }];
        for (const pWord of probableWords) {
          pWord.solvedBy = this.props.currentPlayer;
        }
        this.setState({ highlightLetter, probableWords, selectedLetters });
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
        data-testid={'sol-interaction-board'}
      ></rect>
    );
  }
}
