//import { Ctx } from 'boardgame.io';
import { IAIConfig } from 'gamesShared/definitions/game';
import { RandomBot } from 'boardgame.io/ai';
//import { MCTSBot } from 'boardgame.io/ai';
//import { GameCustomizationState } from 'gamesShared/definitions/customization';
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
