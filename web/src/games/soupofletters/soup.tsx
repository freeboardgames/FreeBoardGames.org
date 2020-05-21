import React from 'react';
import { red, blue, green, grey } from '@material-ui/core/colors';
import soupCSS from './soup.css'
import { orientations } from './puzzel';
import { ISingleLetter, ISolvedWord } from './game'; 

const BOARD_SIZE = 500;

interface ISoupProps {
  boardSize: number;
  puzzel: Array<Array<string>>;
  solution: Array<ISolvedWord>;
  wordFound?: (solvedWord: ISolvedWord) => void;
};

interface ISoupState {
  selectedLetters: Array<ISingleLetter>;
  probableWord?: ISolvedWord; 
}

const playerColors = {
  '0': red[500],
  '1': blue[500],
};

export class Soup extends React.Component<ISoupProps, ISoupState> {

  constructor(props) {
    super(props);
    
    // initialize state
    this.state = {
      selectedLetters: [],
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg
          width={`${this.props.boardSize}%`}
          height={`${this.props.boardSize}%`}
          viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
          pointerEvents="visible"
          style={{marginTop:'10px', padding:'0 5px'}}
        >
          <g>{this._placeLetters()}</g>
        </svg>
      </div>
    );
  }

  _selectWordStart = (xId:number, yId:number, letter:string ) => {
    
    let probableWord = this.state.probableWord;
    // if a probable word already selected, then return
    if (probableWord) {return;}

    for (const s of this.props.solution){
      if (s.x === xId && s.y === yId) {
        if(s.solvedBy){
          return; // the word is already found by another player
        }
        probableWord = s;
        break;
      }
    }
    // is no probable word found, return 
    if (!probableWord) { return; }

    // create a new list of selectedLetters 
    const selectedLetters = [];
    if (selectedLetters.length === 0){
      selectedLetters.push({x:xId, y:yId, letter})
      this.setState({selectedLetters, probableWord})
    }

  }

  _selectWordContent = (xId:number, yId:number, letter:string ) => {

    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord
    if(!probableWord) { return; }

    // check if the letter selected currently is properly oriented or not
    const selectedLetters = this.state.selectedLetters.slice();
    const lastSl = selectedLetters[selectedLetters.length - 1]; 
    const nextSl = orientations[probableWord.orientation](lastSl.x, lastSl.y, 1)

    // if not equal return, 
    if (nextSl.x != xId || nextSl.y != yId) { 
      return;
    }
    // if the complete word has been selected, then dont go further 
    if (selectedLetters.length >= probableWord.word.length){
      return;
    }
    
    // if orientation is proper, append letter to the list of selected words     
    selectedLetters.push({x:xId, y:yId, letter})
    this.setState({selectedLetters})
  }

  _endWordSelections = () => {

    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord;
    if(!probableWord) { return; }

    // recreate selected word, 
    let selectedWord = ''; 
    for (const sl of this.state.selectedLetters){
      selectedWord = selectedWord + sl.letter;
    }

    if (selectedWord === this.state.probableWord.word){
      // update game state 
      this.props.wordFound(this.state.probableWord);
    }

    // remove selections 
    this.setState({selectedLetters:[], probableWord:undefined});

  }  

  _getHighlightColor(x, y, letter) {
    // if belongs to a user, give user specific color back 
    for (const sl of this.props.solution){
      if (sl.solvedBy){
        for (const l of sl.letters){
          if (l.x === x && l.y === y && l.letter == letter){
            return playerColors[sl.solvedBy];
          } 
        }
      }
    }

    // if selected in state, give grey color 
    for (const sl of this.state.selectedLetters){
      if (sl.x === x && sl.y === y){
        return green[500];
      }
    }

    return 'black';
  }

  _placeLetters() {

    // calculate hight and width of each letter 
    const lHeight = Math.floor(BOARD_SIZE / this.props.puzzel.length); 
    const lWidth = Math.floor( BOARD_SIZE / this.props.puzzel[0].length);
    const fontSize = 0.75 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    this.props.puzzel.forEach((yList, yId) => {
        yList.forEach((l, xId) => {
          // square around the letter 
          cells.push(
            <rect
              key={'color-square-'+xId+'-'+yId}
              x={(xId)*lWidth} y={(yId)*lHeight} 
              width={lWidth} height={lWidth}
              fill={this._getHighlightColor(xId, yId, l)}
              stroke={grey[500]} strokeWidth={0.05*fontSize}
            />
          );
          // letter inside the square 
          cells.push(
            <text 
              key={'soup-letter-'+xId+'-'+yId} 
              className={soupCSS.noselect}
              x={(xId+0.5)*lWidth} y={(yId+0.80)*lHeight} 
              fontSize={fontSize} fontFamily="sans-serif"
              fill={grey[200]} 
              textAnchor="middle"
            > 
              {l} 
            </text>
          );
          // square around the letter 
          cells.push(
            <rect
              key={'callback-square-'+xId+'-'+yId}
              x={(xId)*lWidth} y={(yId)*lHeight} 
              width={lWidth} height={lWidth}
              style={{opacity:0}}
              onMouseDown={() => this._selectWordStart(xId, yId, l)}
              onMouseEnter={() => this._selectWordContent(xId, yId, l)}
              onMouseUp={()=>this._endWordSelections()}
            />
          );
        }); 
    });
    return cells;
  }

}

