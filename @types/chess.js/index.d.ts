declare module 'chess.js' {
  interface IChessSquare {
    type: string;
    color: string;
  }
  interface IChessMovesOptions {
    verbose?: boolean;
    square?: string;
  }
  interface IChessHistoryOptions {
    verbose?: boolean; 
  }
  interface IChessMove {
    color: string;
    from: string;
    to: string;
    flags: string;
    piece: string;
    san: string;
  }
  export default class Chess {
    pgn: () => string;  
    move: (san: string) => void;
    turn: () => string;
    history: (options: IChessHistoryOptions) => Array<IChessMove>;
    moves: (options: IChessMovesOptions) => Array<IChessMove>;
    in_check: () => boolean; 
    load_pgn: (pgn: string) => void;
    get: (square: string)=> IChessSquare;
  } 
}
