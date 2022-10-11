import { IAIConfig } from 'gamesShared/definitions/game';
import { RandomBot } from 'boardgame.io/ai';
import { aiConfig } from './Game';

const config: IAIConfig = {
  bgioAI: () => {
    {
      return {
        type: RandomBot,
        ai: aiConfig,
      };
    }
  },
};
export default config;
