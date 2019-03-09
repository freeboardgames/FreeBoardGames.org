import { IAIConfig } from '../index';
import { AI } from '@freeboardgame.org/boardgame.io/ai';

interface IPlayState {
  G: any;
  ctx: any;
}

const config: IAIConfig = {
  bgioAI: (level: string) => {
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
  },
};
export default config;
