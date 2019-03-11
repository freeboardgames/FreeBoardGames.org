import { IAIConfig } from '../index';
import { AI } from '@freeboardgame.org/boardgame.io/ai';

interface IPlayState {
  G: any;
  ctx: any;
}

class TictactoeBot {
  async play(state: IPlayState, playerID: string) {
    const cell = this.generateMove(state);
    return this.makeMove(cell);
  }
  generateMove(state: IPlayState) {
    while (true) {
      const cell = this.randomNumber(0, 9);
      if (state.G.cells[cell] === null) {  // unplayed
        return cell;
      }
    }
  }
  makeMove(cell: number) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'clickCell', args: [cell], playerID: '1' } } };
  }
  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
const config: IAIConfig = {
  bgioAI: (level: string) => {
    if (level === 'Hard') {
      return AI({
        enumerate: (G: any, ctx: any) => {
          const moves = [];
          for (let i = 0; i < 9; i++) {
            if (G.cells[i] === null) {
              moves.push({ move: 'clickCell', args: [i] });
            }
          }
          return moves;
        },
      });
    } else if (level === 'Easy') {
      return {
        bot: TictactoeBot,
      };
    }
  },
};
export default config;
