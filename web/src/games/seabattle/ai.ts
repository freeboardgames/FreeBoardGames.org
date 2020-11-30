import { IAIConfig } from 'gamesShared/definitions/game';
import { ICell, IShip, ISalvo, generateRandomShips } from './game';
import shuffle from 'shuffle-array';

interface IPlayState {
  G: any;
  ctx: any;
}

export class SeabattleBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'setup') {
      const shipPositions = generateRandomShips(parseInt(state.ctx.currentPlayer));
      return this.makeSetShipsMove(shipPositions, playerID);
    } else {
      // if this is the first turn for our AI, wait only 500ms.  Else 2500ms
      const sleepMs = state.G.salvos.length === 0 ? 500 : 2500;
      await sleep(sleepMs);
      const cell = this.generateMove(playerID, state);
      return this.makeSalvoMove(cell, playerID);
    }
  }

  makeSetShipsMove(ships: IShip[], playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'setShips', args: [ships], playerID } } };
  }

  makeSalvoMove(cell: ICell, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'salvo', args: [cell.x, cell.y], playerID } } };
  }

  generateMove(playerID: string, state: IPlayState) {
    const salvos = state.G.salvos.filter(
      (salvo: ISalvo) =>
        salvo.player === Number(playerID) && salvo.hit === true && typeof salvo.hitShip !== 'undefined',
    );
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

    const minPos = { x: Math.min(...xMap), y: Math.min(...yMap) };
    const maxPos = { x: Math.max(...xMap), y: Math.max(...yMap) };
    const direction = maxPos.x === minPos.x ? { x: 0, y: 1 } : { x: 1, y: 0 };
    return this.anyValidMove(state, [
      { x: minPos.x - direction.x, y: minPos.y - direction.y },
      { x: maxPos.x + direction.x, y: maxPos.y + direction.y },
    ]);
  }

  isInBounds(x: number) {
    return x >= 0 && x <= 9;
  }

  isValidMove(state: IPlayState, cell: ICell) {
    return this.isInBounds(cell.x) && this.isInBounds(cell.y) && this.isUniqueMove(state, cell);
  }

  anyValidMove(state: IPlayState, moves: ICell[]) {
    shuffle(moves); // ONLY source of randomness
    for (const move of moves) {
      if (this.isValidMove(state, move)) {
        return move;
      }
    }
    return null;
  }

  getRandomNeighbor(state: IPlayState, salvo: ISalvo): ICell {
    return this.anyValidMove(state, [
      { x: salvo.cell.x - 1, y: salvo.cell.y },
      { x: salvo.cell.x, y: salvo.cell.y - 1 },
      { x: salvo.cell.x + 1, y: salvo.cell.y },
      { x: salvo.cell.x, y: salvo.cell.y + 1 },
    ]);
  }

  getOtherSalvosHitShip(state: IPlayState, id: string) {
    return state.G.salvos.filter((salvo: ISalvo) => salvo.hitShip === id);
  }

  isShipSunk(state: IPlayState, id: string) {
    return state.G.ships.filter((ship: IShip) => ship.id === id)[0].sunk;
  }

  generateRandomMove(state: IPlayState) {
    const allPossibleMoves: ICell[] = [];
    for (let x = 0; x <= 9; x++) {
      for (let y = 0; y <= 9; y++) {
        allPossibleMoves.push({ x, y });
      }
    }
    return this.anyValidMove(state, allPossibleMoves);
  }

  isUniqueMove(state: IPlayState, cell: ICell) {
    const moves = state.G.salvos.filter(
      (salvo: ISalvo) =>
        salvo.player === parseInt(state.ctx.currentPlayer) && salvo.cell.x === cell.x && salvo.cell.y === cell.y,
    );
    return moves.length === 0;
  }
}

export const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: SeabattleBot,
    };
  },
};

function sleep(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export default config;
