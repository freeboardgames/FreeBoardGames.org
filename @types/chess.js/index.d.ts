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
  class Chess {
    game_over: () => boolean;
    in_draw: () => boolean;
    in_threefold_repetition: () => boolean;
    insufficient_material: () => boolean;
    in_stalemate: () => boolean;
    in_checkmate: () => boolean;
    ascii: () => string;
    fen: () => string;
    pgn: () => string;
    move: (san: string, options?: any) => void;
    turn: () => string;
    history: (options: IChessHistoryOptions) => Array<IChessMove>;
    moves: (options: IChessMovesOptions) => Array<IChessMove>;
    in_check: () => boolean;
    load_pgn: (pgn: string) => void;
    get: (square: string) => IChessSquare;
  }
  export default Chess;
}
