import React from 'react';
import { grey } from '@material-ui/core/colors';
import soupCSS from './soup.css'
import { orientations } from './puzzel';
import { ISingleLetter, ISolvedWord } from './game'; 
import { playerColors, BOARD_SIZE, SOLUTION_COLOR } from './constants'

interface ISoupProps {
  puzzel: Array<Array<string>>;
  solution: Array<ISolvedWord>;
  currentPlayer: string;
  wordFoundCallback?: (solvedWord: ISolvedWord) => void;
  isGameOver: boolean;
};

interface ISoupState {
  selectedLetters: Array<ISingleLetter>;
  probableWord?: ISolvedWord; 
}

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
          width={`${this.props.isGameOver ? 50:100}%`}
          height={`${this.props.isGameOver ? 50:100}%`}
          viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
          pointerEvents="visible"
          style={{marginTop:'10px', padding:'0 5px'}}
        >
          <g>{this._placeLetters()}</g>
        </svg>
      </div>
    );
  }

  _selectWordStart = (xId:number, yId:number, letter:string, event ) => {

    // console.log('event: ', event)
    
    let probableWord = this.state.probableWord;
    // if a probable word already selected, then return
    if (probableWord) {return;}

    for (const s of this.props.solution){
      if (s.x === xId && s.y === yId) {
        if(s.solvedBy){
          return; // the word is already found by another player
        }
        probableWord = {...s};
        break;
      }
    }
    // is no probable word found, return 
    if (!probableWord) { return; }

    // create a new list of selectedLetters 
    const selectedLetters = [{x:xId, y:yId, letter}];
    probableWord.solvedBy = this.props.currentPlayer;
    this.setState({selectedLetters, probableWord})

  }

  _selectWordContent = (xId:number, yId:number, letter:string, event) => {

    // console.log('event: ', event, letter);

    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord
    if(!probableWord) { return; }

    // check if the same players is still playing, else remove selections 
    if (probableWord.solvedBy != this.props.currentPlayer){
      this.setState({selectedLetters:[], probableWord:undefined});
      return;
    }

    // check if the letter selected currently is properly oriented or not
    const selectedLetters = this.state.selectedLetters.slice();
    const lastSl = selectedLetters[selectedLetters.length - 1]; 
    const nextSl = orientations[probableWord.orientation](lastSl.x, lastSl.y, 1)

    // if not equal return, 
    if (nextSl.x != xId || nextSl.y != yId) { 
      return;
    }

    // if orientation is proper, append letter to the list of selected words     
    selectedLetters.push({x:xId, y:yId, letter})

    // if the complete word has been selected, then dont go further 
    if (selectedLetters.length >= probableWord.word.length){
      this.props.wordFoundCallback(this.state.probableWord);
      this.setState({selectedLetters:[], probableWord:undefined});
      return;
    }

    // update state    
    this.setState({selectedLetters})

  }

  _endWordSelections = () => {

    // if first letter is not properly selected, return
    const probableWord = this.state.probableWord;
    if(!probableWord) { return; }

    // check if the same players is still playing, else remove selections 
    if (probableWord.solvedBy != this.props.currentPlayer){
      this.setState({selectedLetters:[], probableWord:undefined});
      return;
    }

    // recreate selected word, 
    let selectedWord = ''; 
    for (const sl of this.state.selectedLetters){
      selectedWord = selectedWord + sl.letter;
    }

    if (selectedWord === this.state.probableWord.word){
      // update game state 
      this.props.wordFoundCallback(this.state.probableWord);
    }

    // remove selections 
    this.setState({selectedLetters:[], probableWord:undefined});

  }  

  _getHighlightColor(x, y, letter) {
    // if belongs to a user, give user specific color back 
    for (const sl of this.props.solution){
      for (const l of sl.letters){
        if (l.x === x && l.y === y && l.letter == letter){
          if (sl.solvedBy){
            return playerColors[sl.solvedBy];
          } else if (this.props.isGameOver && sl.solvedBy === undefined) {
            return SOLUTION_COLOR;
          }
        }
      } 
    }

    // if selected in state, give color of player who selected the first letter 
    for (const sl of this.state.selectedLetters){
      if (sl.x === x && sl.y === y){
        return playerColors[this.state.probableWord.solvedBy];
      }
    }

    return 'black';
  }

  _placeLetters() {

    // calculate hight and width of each letter 
    const puzzel = this.props.puzzel;
    const lHeight = Math.floor(BOARD_SIZE / puzzel.length); 
    const lWidth = Math.floor( BOARD_SIZE / puzzel[0].length);
    const fontSize = 0.75 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    puzzel.forEach((yList, yId) => {
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
              // works on desktop
              onMouseDown={() => this._selectWordStart(xId, yId, l, 'onMouseDown')}
              onMouseEnter={() => this._selectWordContent(xId, yId, l, 'onMouseEnter')}
              onMouseUp={()=>this._endWordSelections()}  
              // // should works on phone
              // onTouchStart={() => this._selectWordStart(xId, yId, l, 'onTouchStart')}
              // onTouchMove={() => this._selectWordContent(xId, yId, l, 'onPointerMove')}
              // onTouchEnd={()=>this._endWordSelections()}         
              // // pointer events should work with both mouse and touch, but they dont :(
              // onPointerDown={() => {console.log('down')}}
              // onPointerMove={() => {console.log('enter/move')}}
              // onPointerUp={()=> {console.log('up')}}
            />
          );
        }); 
    });
    return cells;
  }

}

