import { Ctx, Game } from 'boardgame.io';

export const CheckersGame: Game<any> = {
    name: 'checkers', 
    moves: {
    },
    turn: {
      minMoves: 1,
      maxMoves: 1,
    },
  };

export default CheckersGame;