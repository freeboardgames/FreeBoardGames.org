import { IAIConfig } from '../index';

interface IPlayState {
  G: any;
  ctx: any;
}

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    return {};
  }
}

const config: IAIConfig = {
  bgioAI: (level: string) => {
    return {
      bot: SeabattleBot,
    };
  },
};
export default config;
