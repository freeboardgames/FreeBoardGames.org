import { IAIConfig } from '../index';
import { ICell, IShip, ISalvo, generateRandomShips } from './game';

interface IAISalvo extends ISalvo {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

interface IPlayState {
  G: any;
  ctx: any;
}

class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'setup') {
      const shipPositions = generateRandomShips(1);
      return this.makeSetShipsMove(shipPositions);
    } else {
      const cell = this.generateMove(playerID, state);
      return this.makeSalvoMove(cell);
    }
  }

  makeSetShipsMove(ships: IShip[]) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'setShips', args: [ships], playerID: '1' } } };
  }

  makeSalvoMove(cell: ICell) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'salvo', args: [cell.x, cell.y], playerID: '1' } } };
  }

  generateMove(playerID: string, state: IPlayState) {
    const salvos = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === Number(playerID) &&
      salvo.hit === true &&
      typeof salvo.hitShip !== 'undefined'));
    for (const salvo of salvos) {
      // if we have already fired salvos, see if we've hit any ships that remain unsunk
      if (!this.isShipSunk(state, salvo.hitShip)) {
        const otherHitSalvos = this.getOtherSalvosHitShip(state, salvo.hitShip);
        if (otherHitSalvos.length >= 2) {
          // we have hit this ship at least twice, so we can make an intelligent move
          return this.getNextShipFoundMove(state, otherHitSalvos);
        }
        // no other salvos for the same ship were hit, so hit a random neighbor
        return this.getRandomNeighbor(state, salvo);
      }
    }
    // generate a random move
    return this.generateRandomMove(state);
  }

  getNextShipFoundMove(state: IPlayState, hitSalvos: ISalvo[]): ICell {
    const len = hitSalvos.length;
    const lastHitSalvo = hitSalvos[len - 1];
    const lastHitCell = lastHitSalvo.cell;
    const secondLastHitCell = hitSalvos[len - 2].cell;  // second to last hit
    const firstHitCell = hitSalvos[0].cell;

    let move: ICell = { x: lastHitCell.x, y: lastHitCell.y };  // set to last hit cell
    let moveDelta;
    if (lastHitCell.x === secondLastHitCell.x) {
      // ship is vertical x, so move horizontal y
      moveDelta = lastHitCell.y - secondLastHitCell.y;
      if (moveDelta !== -1 && moveDelta !== 1) {
        return this.getRandomNeighbor(state, lastHitSalvo);
      }
      if (this.isInBounds(move.y + moveDelta)) {
        move = { x: move.x, y: move.y + moveDelta };  // reset to first hit cell
      } else {
        move = { x: firstHitCell.x, y: firstHitCell.y - moveDelta };  // reset to first hit cell
      }
    } else if (lastHitCell.y === secondLastHitCell.y) {
      // ship is horizontal y, so move vertical x
      moveDelta = lastHitCell.x - secondLastHitCell.x;
      if (moveDelta !== -1 && moveDelta !== 1) {
        return this.getRandomNeighbor(state, lastHitSalvo);
      }
      if (this.isInBounds(move.x + moveDelta)) {
        move = { x: move.x + moveDelta, y: move.y };  // reset to first hit cell
      } else {
        move = { x: firstHitCell.x - moveDelta, y: firstHitCell.y };  // reset to first hit cell
      }
    } else {
      // we hit a different ship than the one before, so hit a random neighbor:
      return this.getRandomNeighbor(state, lastHitSalvo);
    }
    return move;
  }

  isInBounds(x: number) {
    const valid = (x >= 0 && x <= 9);
    return valid;
  }

  isValidMove(state: IPlayState, cell: ICell) {
    const valid = (this.isInBounds(cell.x) && this.isInBounds(cell.y) && this.isUniqueMove(state, cell));
    return valid;
  }

  areVerticalMovesPossible(state: IPlayState, move: ICell) {
    const possible = (this.isValidMove(state, move));
  }

  getRandomNeighbor(state: IPlayState, salvo: ISalvo): ICell {
    let validMove;
    let move: ICell;
    while (!validMove) {
      const vertical = this.genRandomNumber(0, 1) === 0;
      const randomChange = (this.genRandomNumber(0, 1) === 0) ? -1 : 1;
      const moveDelta = { x: (vertical) ? randomChange : 0, y: (vertical) ? 0 : randomChange };
      move = { x: salvo.cell.x + moveDelta.x, y: salvo.cell.y + moveDelta.y };
      validMove = this.isValidMove(state, move);
    }
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
      const x = this.genRandomNumber(0, 9);
      const y = this.genRandomNumber(0, 9);
      const randomCell: ICell = { x, y };
      const unique = this.isUniqueMove(state, randomCell);
      if (unique) {
        return randomCell;
      }
    }
  }

  getAISalvos(state: IPlayState) {
    const salvos = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1));
    return salvos;
  }

  isUniqueMove(state: IPlayState, cell: ICell) {
    const moves = state.G.salvos.filter((salvo: ISalvo) => (
      salvo.player === 1 && salvo.cell.x === cell.x && salvo.cell.y === cell.y),
    );
    const uniqueMove = moves.length === 0;
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
