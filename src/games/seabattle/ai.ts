import { IAIConfig } from '../index';
import { ICell, IShip, ISalvo, generateRandomShips } from './game';

interface IPlayState {
  G: any;
  ctx: any;
}

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'setup') {
      return this.makeSetShipsMove(generateRandomShips(1));
    } else {
      const cell = this.generateMove(state);
      return this.makeSalvoMove(cell);
    }
  }

  makeSetShipsMove(ships: IShip[]) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'setShips', args: [ships], playerID: '1' } } };
  }

  makeSalvoMove(cell: ICell) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'salvo', args: [cell.x, cell.y], playerID: '1' } } };
  }

  generateMove(state: IPlayState) {
    const hitCells = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1 &&
      salvo.hit === true &&
      salvo.hitShip));

    return this.generateRandomMove(state);
  }

  generateRandomMove(state: IPlayState) {
    while (true) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const randomCell: ICell = { x, y };
      const unique = this.isUniqueMove(state, randomCell);
      if (unique) {
        return randomCell;
      }
    }
  }

  getAISalvos(state: IPlayState, cell: ICell) {
    return state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1));
  }

  isUniqueMove(state: IPlayState, cell: ICell) {
    const uniqueMove = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1 &&
      salvo.cell.x === cell.x &&
      salvo.cell.y === cell.y)).length === 0;
    return uniqueMove;
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
