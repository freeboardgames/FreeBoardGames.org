import { IAIConfig } from 'gamesShared/definitions/game';
import { IG } from './interfaces';
import { getValidMoves } from './moves';
import { Ctx } from 'boardgame.io';

interface IPlayState {
  G: IG;
  ctx: Ctx;
}

class DraculaRandomBot {
  async play(state: IPlayState, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'move', args: [1, 2], playerID } } };
  }
}

const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: DraculaRandomBot,
    };
  },
};
export default config;
