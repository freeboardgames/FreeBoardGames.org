import { IAIConfig } from '../index';
import { ICell, IShip, ISalvo, generateRandomShips } from './game';

interface IAISalvo extends ISalvo {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

// interface IAISalvoTarget {
//     cells: ICell[];
// }

interface IPlayState {
  G: any;
  ctx: any;
//   AISalvoTargets: IAISalvoTarget[];
//   AISalvos: IAISalvo[];
}

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'setup') {
      const shipPositions = generateRandomShips(1);
      console.log(shipPositions);
      return this.makeSetShipsMove(shipPositions);
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
    const salvos = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1 &&
      salvo.hit === true &&
      typeof salvo.hitShip !== 'undefined'));
    for (const salvo of salvos) {
      if (this.isShipSunk(state, salvo.hitShip)) {
        console.log('Ship has sunk ' + salvo.hitShip);
      } else {
        console.log('Ship has not sunk ' + salvo.hitShip);
        const otherHitSalvos = this.getOtherSalvosHitShip(state, salvo.hitShip);
        if (otherHitSalvos.length === 0) {
          // no other salvos for the same ship were hit, so hit a random neighbor
          return this.getRandomNeighbor(state, salvo);
        }
        return this.getNextMoveFromNeighbors(state, otherHitSalvos);
      }
    }
    return this.generateRandomMove(state);
  }

  getNextMoveFromNeighbors(state: IPlayState, salvos: ISalvo[]): ICell {
    const len = salvos.length;
    const lastHitSalvo = salvos[len - 1];
    if (salvos.length > 1) {
      const hitCell1 = lastHitSalvo.cell;
      const hitCell0 = salvos[len - 2].cell;  // second to last hit
      const move = hitCell1;  // move to be made
      if (hitCell1.x === hitCell0.x) {
        // ship is vertical, so move horizontally
        move.y = hitCell1.y - hitCell0.y;
        if (!this.isValidMove(state, move)) {
          move.y = hitCell1.y + hitCell0.y;  // undo last move
          move.y = hitCell1.y + hitCell0.y;  // try other way
        }
      } else {
        // ship is horizontal
        move.x = hitCell1.x - hitCell0.x;
        if (!this.isValidMove(state, move)) {
          move.x = hitCell1.x + hitCell0.x;
          move.x = hitCell1.x + hitCell0.x;
        }
      }
      return move;
    } else {
      return this.getRandomNeighbor(state, lastHitSalvo);
    }
  }

  isValidMove(state: IPlayState, cell: ICell) {
    return (cell.x >= 0 && cell.x <= 10 &&
           cell.y >= 0 && cell.y <= 10 &&
           this.isUniqueMove(state, cell));
  }

  getRandomNeighbor(state: IPlayState, salvo: ISalvo): ICell {
    let i = 0;
    let move;
    do {
      move = salvo.cell;
      const vertical = this.genRandomNumber(0, 1) === 0;
      const randomChange = (this.genRandomNumber(0, 1) === 0) ? -1 : 1;
      if (vertical) {
        if (move.x === 0) {
          move.x++;
        } else if (move.x === 10) {
          move.x--;
        } else {
          move.x += randomChange;
        }
      } else {
        if (move.y === 0) {
          move.y++;
        } else if (move.y === 10) {
          move.y--;
        } else {
          move.y += randomChange;
        }
      }
      console.log(`Hitting random neighbor, ${move.x} ${move.y}`);
      i++;
    } while (i < 1000 && (!this.isValidMove(state, move)));
    return move;
  }

  getOtherSalvosHitShip(state: IPlayState, id: string) {
    return state.G.salvos.filter((salvo: ISalvo) => (
      salvo.hitShip === id
    ));
  }

  isShipSunk(state: IPlayState, id: string) {
    return state.G.ships.filter((ship: IShip) => (
      ship.id === id
    ))[0].sunk;
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

  genRandomNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max + 1 - min));
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
