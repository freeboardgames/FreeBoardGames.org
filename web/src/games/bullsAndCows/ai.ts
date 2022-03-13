import { IAIConfig } from 'gamesShared/definitions/game';
import { Ctx } from 'boardgame.io';
import { IG } from './service';

interface IPlayState {
  G: IG;
  ctx: Ctx;
}

export class BullsAndCowsBot {
  async play(state: IPlayState, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'pass', args: [], playerID } } };
  }
}

export const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: BullsAndCowsBot,
    };
  },
};

export default config;
