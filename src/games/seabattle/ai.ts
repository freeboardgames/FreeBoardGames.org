import { IAIConfig } from '../index';
import { IShip, generateRandomShips } from './game';

interface IPlayState {
  G: any;
  ctx: any;
}

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'setup') {
      return this.makeSetShipsMove(generateRandomShips(1));
    } else {
      return this.makeSalvoMove(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    }
  }

  makeSetShipsMove(ships: IShip[]) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'setShips', args: [ships], playerID: '1' } } };
  }

  makeSalvoMove(x: number, y: number) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'salvo', args: [x, y], playerID: '1' } } };
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
