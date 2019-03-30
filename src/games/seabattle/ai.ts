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
    const xMap = hitSalvos.map((salvo) => salvo.cell.x);
    const yMap = hitSalvos.map((salvo) => salvo.cell.y);

    const minSalvoPos = {
      x: Math.min(...xMap),
      y: Math.min(...yMap),
    };
    const maxSalvoPos = {
      x: Math.max(...xMap),
      y: Math.max(...yMap),
    };
    const diffMinMaxSalvoPos = { x: minSalvoPos.x - maxSalvoPos.x, y: minSalvoPos.y - maxSalvoPos.y }  // either x or y must be 0, given that the ship must be horizontal or vertical
    const direction = diffMinMaxSalvoPos.x === 0 ? { x: 0, y: 1 } :  { x: 1, y: 0 };
    const diffLength = diffMinMaxSalvoPos.x + diffMinMaxSalvoPos.y
    if (diffLength === salvos.length) { // This means that there is no "hole" in the salvos, therefore we must try the edges
      return anyValidMove([{ x: minSalvoPos.x - direction.x, y: minSalvoPos.y - direction.y }, { x: maxSalvoPos.x + direction.x, y: maxSalvoPos.y + direction.y }]); 
    } else {
      return anyValidMove([ all cells between minSalvoPos and maxSalvoPos ]);
    }
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
