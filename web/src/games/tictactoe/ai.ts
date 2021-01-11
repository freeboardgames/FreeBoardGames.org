import { IAIConfig } from 'gamesShared/definitions/game';
import { MCTSBot } from 'boardgame.io/ai';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { DEFAULT_QUICK_CUSTOMIZATION, QuickCustomizationState, TicTacToeDifficulty } from './customization';

interface IPlayState {
  G: any;
  ctx: any;
}

class TictactoeRandomBot {
  async play(state: IPlayState, playerID: string) {
    const cell = this.generateRandomMove(state);
    return this.makeMove(playerID, cell);
  }
  generateRandomMove(state: IPlayState) {
    const freeCellsIndexes = [];
    const cells = state.G.cells;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === null) {
        freeCellsIndexes.push(i);
      }
    }
    const randIndex = this.randomNumber(0, freeCellsIndexes.length - 1);
    const cell = freeCellsIndexes[randIndex];
    return cell;
  }
  makeMove(playerID: string, cell: number) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'clickCell', args: [cell], playerID } } };
  }
  randomNumber(min: number, max: number) {
    // return Math.floor(Math.random() * (max - min + 1) + min);  // https://github.com/babel/minify/issues/904
    return (Math.random() * (max - min + 1) + min) << 0;
  }
}
const config: IAIConfig = {
  bgioAI: (customization: GameCustomizationState) => {
    const quickCustomizationState = (customization?.quick as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;
    const difficulty = quickCustomizationState.difficulty;
    if (difficulty === TicTacToeDifficulty.HARD) {
      return {
        type: MCTSBot,
        ai: {
          enumerate: (G: any) => {
            const moves = [];
            for (let i = 0; i < 9; i++) {
              if (G.cells[i] === null) {
                moves.push({ move: 'clickCell', args: [i] });
              }
            }
            return moves;
          },
        },
      };
    } else if (difficulty === TicTacToeDifficulty.EASY) {
      return { ai: TictactoeRandomBot };
    }
  },
};
export default config;
