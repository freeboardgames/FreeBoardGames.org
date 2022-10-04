import { Ctx, Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

export type P_ID = '0' | '1';

export type CellID = number;

export interface GameState {
  //myID:P_ID,
  //opponentID:P_ID,
  editMode: boolean;
  cells: (ObjInstance | null)[];
  places: (Stronghold | null)[];
  inSupply: { [key in P_ID]: CellID[] };
  moveRecords: { [key in P_ID]: [CellID, CellID][] }; //(stCId,edCId)
  attackRecords: { [key in P_ID]: [CellID, ObjInstance | 'Arsenal'] | null };
  forcedRetreat: { [key in P_ID]: [CellID | null, CellID | null] }; //the start and end of retreat CId,
}
export function dualPlayerID(id: P_ID) {
  switch (id) {
    case '0':
      return '1';
    case '1':
      return '0';
  }
}
export const aiConfig = {
  enumerate: (G: GameState, ctx: Ctx) => {
    let evts = [{ event: 'endTurn', args: [] }];
    const CIdLst = Array.from(Array(BoardSize.mx * BoardSize.my).keys());
    const cPlayer = ctx.currentPlayer as P_ID;
    //const myPieceId = filterCId(G.cells,(obj)=>obj.belong===cPlayer)
    //const opPieceId = filterCId(G.cells,(obj)=>obj.belong!==cPlayer)
    let atks = CIdLst.filter((id) => canAttack(G, ctx, id)[0]).map((id) => {
      return { move: 'attack', args: [id] };
    });
    let moves = CIdLst.filter((stCId) => canPick(G, ctx, stCId)).flatMap((stCId) => {
      //simply predict supply line after move
      const newG: GameState = { ...G, cells: G.cells.map((obj, CId) => (CId === stCId ? null : obj)) };
      const suppPred = getSuppliedCells(newG, cPlayer);
      const dirSuppPred = getDirSuppliedLines(newG, cPlayer)[0];
      //move to dir supplied or close friendly units.
      return CIdLst.filter(
        (edCId) => canPut(G, ctx, stCId, edCId) && (dirSuppPred.includes(edCId) || ptSetDisLessThan(suppPred, edCId)),
      ).map((edCId) => {
        return { move: 'movePiece', args: [stCId, edCId] };
      });
    });
    let result = [...evts, ...atks, ...moves];
    return result;
  },
  //objectives: (G,ctx)=>{}
};

export const Kriegspiel: Game<GameState> = {
  setup: (ctx) => {
    return loadGame(game1, ctx);
  },
  /* playerView: (G, ctx, playerID) => {
    return {...G, myID: playerID, opponentID:dualPlayerID(playerID as P_ID)};
  }, */
  turn: {
    onBegin(G, ctx) {
      const cPlayer = ctx.currentPlayer as P_ID;
      G.moveRecords[cPlayer] = [];
      G.attackRecords[cPlayer] = null;
      const retreatSt = G.forcedRetreat[cPlayer][0];
      //if nowhere to retreat
      if (retreatSt !== null && moveRange(G, retreatSt, 1).length === 0) {
        //capture
        G.cells[retreatSt] = null;
        G.forcedRetreat[cPlayer] = [null, null];
      }
    },
    onEnd(G, ctx) {
      const cPlayer = ctx.currentPlayer as P_ID;
      const retreatEd = G.forcedRetreat[cPlayer][1];
      //retreating target
      if (retreatEd !== null) {
        const retreatObj = G.cells[retreatEd];
        if (retreatObj) {
          //end retreating
          retreatObj.retreating = false;
          G.forcedRetreat[cPlayer] = [null, null];
        }
      }
    },
  },

  moves: {
    movePiece: (G, ctx, stCId: CellID, edCId: CellID) => {
      const obj = G.cells[stCId];
      const cPlayer = ctx.currentPlayer as P_ID;

      if (obj && canPick(G, ctx, stCId) && canPut(G, ctx, stCId, edCId)) {
        G.cells[stCId] = null;
        //default make it un supplied
        obj.supplied = false;
        G.cells[edCId] = obj;
        //record move
        G.moveRecords[cPlayer].push([stCId, edCId]);

        const retreatSt = G.forcedRetreat[cPlayer][0];
        //if this is a retreat
        if (retreatSt !== null) {
          G.forcedRetreat[cPlayer] = [null, edCId];
        }

        update(G, ctx);
      } else return INVALID_MOVE;
    },
    attack: (G, ctx, CId: CellID) => {
      const cPlayer = ctx.currentPlayer as P_ID;
      const obj = G.cells[CId];
      const [canAtk, relOff] = canAttack(G, ctx, CId);
      if (obj && canAtk) {
        G.attackRecords[cPlayer] = [CId, obj];
        //force retreat
        if (relOff === 1) {
          obj.retreating = true;
          G.forcedRetreat[obj.belong] = [CId, null];
        }
        //capture
        else {
          G.cells[CId] = null;
        }
        update(G, ctx);
      } else return INVALID_MOVE;
    },
    setEditMode: (G, ctx, b: boolean) => {
      G.editMode = b;
    },
    load: (G, ctx, fen: string) => {
      const isEdit = G.editMode;
      return { ...loadGame(fen, ctx), editMode: isEdit };
    },
    merge: (G, ctx, fen: string) => {
      const addCells = loadGame(fen, ctx).cells;
      const newCells = G.cells.map((obj, id) => (addCells[id] ? addCells[id] : obj));
      G.cells = newCells;
    },
    editCells: (G, ctx, CId: CellID, element: ObjInstance | null) => {
      G.cells[CId] = element;
      update(G, ctx);
    },
    editPlaces: (G, ctx, CId: CellID, element: Stronghold | null) => {
      G.places[CId] = element;
      update(G, ctx);
    },
  },

  endIf: (G, ctx) => {
    if (!G.editMode && !G.cells.some((obj, id) => canPick(G, ctx, id) || canAttack(G, ctx, id)[0])) {
      const cPlayer = ctx.currentPlayer as P_ID;
      return { winner: dualPlayerID(cPlayer), loser: cPlayer };
    }
  },

  ai: aiConfig,
};

//data save and load board use FEN
//date like "💂‍♂️.0/🎪.0|8|"

function board2FEN<T>(board: (T | null)[], encode: (t: T, id: CellID) => string): string {
  let result: string[] = [];
  let emptyCells = 0;
  board.forEach((obj, id) => {
    if (obj === null) {
      emptyCells = emptyCells + 1;
    } else {
      if (emptyCells > 0) {
        result.push(emptyCells.toString());
        emptyCells = 0;
      }
      result.push(encode(obj, id));
    }
  });
  return '|' + result.join('|') + '|';
}
function FEN2board<T>(fen: string, decode: (str: string) => T | null): (T | null)[] {
  let data: string[] = fen.split('|');
  let result = Array(BoardSize.mx * BoardSize.my).fill(null);
  let pointer = 0;
  data.forEach((str) => {
    if (isNaN(Number(str))) {
      result[pointer] = decode(str);
      pointer = pointer + 1;
    } else {
      pointer = pointer + Number(str);
    }
  });
  return result;
}

export function exportGame(G: GameState): string {
  const mixedBoard = G.cells.map((obj, id) => {
    const strong = G.places[id];
    return obj ? (strong ? ([obj, strong] as [ObjInstance, Stronghold]) : obj) : strong ? strong : null;
  });
  return board2FEN(mixedBoard, (element) => {
    if (Array.isArray(element)) {
      const [obj, str] = element;
      return obj.objRender + '.' + obj.belong + '/' + str.placeRender + (str.belong ? '.' + str.belong : '');
    } else if ((element as ObjInstance).objRender) {
      const obj = element as ObjInstance;
      return obj.objRender + '.' + obj.belong;
    } else {
      const str = element as Stronghold;
      return str.placeRender + (str.belong ? '.' + str.belong : '');
    }
  });
}

function loadGame(fen: string, ctx: Ctx): GameState {
  const deCells = FEN2board(fen, (str) => {
    const data = str.split('/')[0];

    return data ? decodeObj(data) : null;
  });
  const dePlaces = FEN2board(fen, (str) => {
    //💂‍♂️.0/🎪.0
    const dLst = str.split('/');
    const data = dLst[dLst.length - 1];
    return data ? decodeStrong(data) : null;
  });
  let myGame: GameState = {
    editMode: false,
    cells: deCells,
    places: dePlaces,
    inSupply: {
      '0': Array(BoardSize.mx * BoardSize.my).fill(false),
      '1': Array(BoardSize.mx * BoardSize.my).fill(false),
    },
    moveRecords: { 0: [], 1: [] },
    attackRecords: { 0: null, 1: null },
    forcedRetreat: { 0: [null, null], 1: [null, null] },
  };
  update(myGame, ctx);
  return myGame;
}
//💂‍♂️.0->newPiece
function decodeObj(s: string): ObjInstance | null {
  const [t, b] = s.split('.');
  if (t && b) {
    const be = b as P_ID;
    switch (t) {
      case '💂':
        return newPiece('Infantry', be);
      case '🏇':
        return newPiece('Cavalry', be);
      case '🎉':
        return newPiece('Artillery', be);
      case '🚀':
        return newPiece('Swift_Artillery', be);
      case '🚩':
        return newPiece('Relay', be);
      case '🚚':
        return newPiece('Swift_Relay', be);

      default:
        return null;
    }
  } else return null;
}

function decodeStrong(s: string): Stronghold | null {
  const [t, b] = s.split('.');
  if (t) {
    const be = b ? (b as P_ID) : null;
    switch (t) {
      case '🎪':
        return newStronghold('Arsenal', be);
      case '🏰':
        return newStronghold('Fortress', be);
      case '🛣️':
        return newStronghold('Pass', be);
      case '⛰️':
        return newStronghold('Mountain', be);
      default:
        return null;
    }
  } else return null;
}
export const onlyMap =
  '|32|🏰|6|🎪.0|19|⛰️|⛰️|⛰️|⛰️|19|🎪.0|1|⛰️|24|⛰️|24|🛣️|24|⛰️|24|⛰️|10|🏰|13|⛰️|2|🏰|76|🏰|12|🏰|32|⛰️|⛰️|⛰️|⛰️|⛰️|⛰️|24|🛣️|6|🏰|17|⛰️|24|⛰️|24|⛰️|36|🎪.1|19|🎪.1|';
const game1 =
  '|32|🏰|6|🎪.0|19|⛰️|⛰️|⛰️|⛰️|14|🚩.0|4|🎪.0|1|⛰️|24|⛰️|19|🚚.0|4|💂.0/🛣️.0|17|🏇.0|🏇.0|1|💂.0|💂.0|🎉.0|💂.0|⛰️|17|🏇.0|🏇.0|💂.0|🚀.0|💂.0|💂.0|💂.0|⛰️|10|🏰|9|💂.0|3|⛰️|2|🏰|51|💂.1|💂.1|💂.1|🎉.1|🏇.1|20|💂.1/🏰.1|💂.1|💂.1|🏇.1|🏇.1|8|🏰|11|💂.1|💂.1|💂.1|🏇.1|17|⛰️|⛰️|⛰️|⛰️|⛰️|⛰️|🚚.1|23|🚀.1/🛣️.1|6|🚩.1/🏰.1|17|⛰️|24|⛰️|24|⛰️|36|🎪.1|19|🎪.1|';
//const game2 = "|32|🏰|6|🎪.0|19|⛰️|⛰️|⛰️|⛰️|19|🎪.0|1|⛰️|24|⛰️|24|🛣️|20|🏇.0|1|🚀.0|1|⛰️|21|💂.0|2|⛰️|10|🎉.0/🏰.0|💂.0|8|💂.0|1|🚩.0|1|⛰️|2|💂.0/🏰.0|💂.0|6|💂.0|💂.0|🏇.0|🚚.0|21|💂.0|💂.0|🏇.0|🏇.0|40|🚩.1/🏰.1|12|💂.1/🏰.1|💂.1|9|💂.1|1|💂.1|12|🏇.1|6|⛰️|⛰️|⛰️|⛰️|⛰️|⛰️|7|💂.1|3|🎉.1|4|🚀.1|2|💂.1|💂.1|3|🛣️|6|💂.1/🏰.1|11|🚚.1|🏇.1|💂.1|3|⛰️|19|🏇.1|🏇.1|3|⛰️|24|⛰️|36|🎪.1|19|🎪.1|"
//update game
function update(G: GameState, ctx: Ctx) {
  //check supply
  //console.log("update")
  let cPlayer = ctx.currentPlayer as P_ID;
  updateSuppliedCells(G, cPlayer);
  updateSuppliedCells(G, dualPlayerID(cPlayer));
  //check update of the stronghold
  G.places.forEach((strong, CId) => {
    if (!strong) {
    } else if (strong.placeType === 'Mountain') {
    }
    //if on arsenals,
    else if (strong.placeType === 'Arsenal' && strong.belong) {
      const obj = G.cells[CId];
      // obj is a enemy, and have offense, and is supplied , check in update
      if (obj && obj.belong !== strong.belong && obj.offense > 0 && obj.supplied) {
        G.attackRecords[cPlayer] = [CId, 'Arsenal'];

        G.places[CId] = null;
        //strong.placeRender="🏳️"
        //then add 1 atk action
      }
    } else {
      const obj = G.cells[CId];
      if (obj && obj.canAddDef) {
        strong.belong = obj.belong;
      } else {
        strong.belong = null;
      }
    }
  });
}

function updateSuppliedCells(G: GameState, player?: P_ID) {
  if (player !== '1') {
    //console.log("SCupdate 0")
    const SuppliedCells0 = getSuppliedCells(G, '0');
    G.inSupply[0] = SuppliedCells0;
    // G.inSupply[0].map((_, id) => SuppliedCells0.includes(id));
  }

  if (player !== '0') {
    //console.log("SCupdate 1")
    const SuppliedCells1 = getSuppliedCells(G, '1');

    G.inSupply[1] = SuppliedCells1;
    //G.inSupply[1].map((_, id) => SuppliedCells1.includes(id));
  }
  updateSuppliedObj(G);
}
function updateSuppliedObj(G: GameState) {
  //console.log("SOupdate")
  G.cells = G.cells.map((obj, id) => {
    if (obj) {
      return { ...obj, supplied: G.inSupply[obj.belong].includes(id) };
    } else {
      return null;
    }
  });
}

// Position and distance functions

export interface Position {
  x: number;
  y: number;
}

interface Size {
  readonly mx: number;
  readonly my: number;
}
export const BoardSize: Size = { mx: 25, my: 20 };

export function Pos2CId(x: number, y: number): CellID {
  if (x < 0 || y < 0 || x >= BoardSize.mx || y >= BoardSize.my) {
    return -1;
  } else {
    return y * BoardSize.mx + x;
  }
}

export function CId2Pos(id: CellID): Position {
  const ox = id % BoardSize.mx;
  const oy = Math.floor(id / BoardSize.mx);
  return { x: ox, y: oy };
}

function NaiveDistance(p1: Position, p2: Position): number {
  return Math.max(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
}

//filter the 米 like targets and distances
function DirectDistance(p1: Position, p2: Position): null | number {
  const dx = Math.abs(p1.x - p2.x);
  const dy = Math.abs(p1.y - p2.y);
  if (dx === dy || dx === 0 || dy === 0) {
    return Math.max(dx, dy);
  } else {
    return null;
  }
}

export function ptSetDisLessThan(set: CellID[], pt: CellID, dis: number = 1): boolean {
  if (set && set.length > 0) {
    return set.some((CId) => NaiveDistance(CId2Pos(pt), CId2Pos(CId)) <= dis);
  } else return false;
}

/* function largerSet(set: CellID[], dis: number = 1): CellID[] {
  return removeDup(set.flatMap((CId)=>{
    const pos = CId2Pos(CId);
    let result=[]
    for (let i = -dis; i <= dis; i++) {
      for (let j = -dis; j <= dis; i++){
        const nx=pos.x+i;
        const ny=pos.y+j;
        const nId=Pos2CId(nx,ny);
        if(nId>-1)
        {result.push(nId)}
      }
    }
    return result
    }))
} */

function connectedComponents(set: CellID[], pts: CellID[]): CellID[] {
  //use CId
  let oldSet = pts;
  let newSet: CellID[] = [];

  do {
    //new pts are not in old, and distance is less than 1
    newSet = set.filter(
      (CId) => !oldSet.includes(CId) && /* largerSet(oldSet).includes(CId) */ ptSetDisLessThan(oldSet, CId),
    );
    oldSet = oldSet.concat(newSet);
  } while (newSet.length > 0);
  return oldSet;
}

// useful function
export function nonNull<T>(a: T) {
  return a !== null;
}

export function removeDup<T>(a: Array<T>) {
  return Array.from(new Set(a));
}

export function filterCId<T>(a: (T | null)[], filter: (b: T, c: CellID) => boolean): CellID[] {
  return a.map((obj, id) => (obj && filter(obj, id) ? id : null)).filter(nonNull) as CellID[];
}

export function canPick(G: GameState, ctx: Ctx, CId: CellID) {
  const cPlayer = ctx.currentPlayer as P_ID;
  const moveEdRec = G.moveRecords[cPlayer].map((p) => p[1]);
  const retreatSt = G.forcedRetreat[cPlayer][0];

  //according the record, not yet attack, each piece has most 1 move, totally 5 moves
  if (G.attackRecords[cPlayer] !== null || moveEdRec.length >= 5 || moveEdRec.includes(CId)) {
    return false;
  }
  //if there is a retreat
  else if (retreatSt !== null) {
    return CId === retreatSt;
  } else {
    let obj = G.cells[CId];
    //obj belongs to player, and must be supplied, except relays
    return obj !== null && obj.belong === cPlayer && (obj.supplied || obj.objType === 'Relay');
  }
}
export function canPut(G: GameState, ctx: Ctx, stCId: CellID, edCId: CellID) {
  const obj = G.cells[stCId];
  //check obj is on stCells,  in move range
  return obj !== null && moveRange(G, stCId, obj.speed).includes(edCId);
}
function moveRange(G: GameState, stCId: CellID, speed: number = 1): CellID[] {
  let result = [stCId];
  for (let i = 0; i < speed; i++) {
    //for each steps target cell is empty and is not mountain,
    // first filter out further cells
    // let result be 1 block larger
    //result = largerSet(result).filter((CId)=>G.cells[CId] === null && G.places[CId]?.placeType !== "Mountain")
    result = G.cells
      .map((obj, id) =>
        NaiveDistance(CId2Pos(stCId), CId2Pos(id)) <= speed &&
        obj === null &&
        G.places[id]?.placeType !== 'Mountain' &&
        ptSetDisLessThan(result, id)
          ? id
          : null,
      )
      .filter(nonNull) as CellID[];
  }
  return result;
}

export function canAttack(G: GameState, ctx: Ctx, CId: CellID): [boolean, number] {
  const cPlayer = ctx.currentPlayer as P_ID;
  const obj = G.cells[CId];
  const retreatSt = G.forcedRetreat[cPlayer][0];

  //if there is no retreat one haven't attacked and obj is enemy
  if (retreatSt === null && G.attackRecords[cPlayer] === null && obj && obj.belong !== cPlayer) {
    const enemy = obj.belong;
    const off = getBattleFactor(G, cPlayer, true, CId)[0];
    const def = getBattleFactor(G, enemy, false, CId)[0];
    const relOff = off - def;
    return [relOff > 0, relOff];
  } else {
    return [false, 0];
  }
}
//search in 米 shape
function searchInMiShape(
  G: GameState,
  CId: CellID,
  filter: (obj: ObjInstance | null, id: CellID) => boolean,
  min: number = 0,
  max: number = Math.max(BoardSize.mx, BoardSize.my),
): [CellID[][], Position[][]] {
  const pos = CId2Pos(CId);
  const aCIdRowsLst: CellID[][] = [];
  const rowsLst: Position[][] = [];
  //search for 8 direction
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        let relPosLine: Position[] = [];
        let aCIdLine: CellID[] = [];
        //check on 1 direction, distance from min to max
        for (let n = min; n <= max; n++) {
          //get the cells on direction
          let cx = pos.x + n * i;
          let cy = pos.y + n * j;
          let cCId = Pos2CId(cx, cy);
          let cObj = G.cells[cCId];
          //!!!filter here
          //and also filter the case that is out of board
          //cx>=0&&cx<BoardSize.mx&&cy>=0&&cy<BoardSize.my
          if (cObj !== undefined && filter(cObj, cCId)) {
            relPosLine.push({ x: n * i, y: n * j });
            aCIdLine.push(cCId);
          } else {
            break;
          }
        }
        if (relPosLine.length !== 0) {
          rowsLst.push(relPosLine);
          aCIdRowsLst.push(aCIdLine);
        }
      }
    }
  }
  return [aCIdRowsLst, rowsLst];
}

//battle value
// get charged cavalry rows with relative positions.
export function getChargedCavalries(G: GameState, CId: CellID): Position[][] {
  const obj = G.cells[CId];
  const belong = obj?.belong;
  const placesType = G.places[CId]?.placeType;

  //the target not in a stronghold, and has piece on it
  if (placesType === 'Fortress' || placesType === 'Pass' || !obj) {
    return [];
  } else {
    const chargeRowsLst = searchInMiShape(
      G,
      CId,
      (cObj, cCId) =>
        //!!!check cObj is a cavalry, a enemy, supplied,not retreating , not in a fortress
        cObj !== null &&
        cObj.objType === 'Cavalry' &&
        cObj.belong !== belong &&
        cObj.supplied &&
        !cObj.retreating &&
        G.places[cCId]?.placeType !== 'Fortress',
      1,
      4,
    )[1];
    return chargeRowsLst;
  }
}

export function getBattleFactor(G: GameState, player: P_ID, isOffense: boolean, CId: CellID): [number, CellID[]] {
  //type: true->offense, false->defense
  const pos = CId2Pos(CId);
  const targetObj = G.cells[CId];
  // filter the unit in 米 shape in its range
  //first filter Out the mountain block,
  let effectingObjs = removeDup(
    searchInMiShape(G, CId, (obj, id) => G.places[id]?.placeType !== 'Mountain', 0, 3)[0].flat(),
  ).filter((id) => {
    let obj = G.cells[id];
    //obj is in range, supplied, belongs to the chosen player,
    return (
      obj &&
      isInRange(pos, CId2Pos(id), obj) &&
      obj.supplied &&
      obj.belong === player &&
      //filter out retreating units in offense
      !(isOffense && (obj.retreating || obj.offense === 0))
    );
  });
  /* filterCId(G.cells,(obj,id)=>
  //obj is in range, supplied, belongs to the chosen player,
  (isInRange(pos,CId2Pos(id),obj)&&obj.supplied&&obj.belong===player)
  //filter out retreating units in offense
  &&!(isOffense&&obj.retreating)
  ) */

  //filter the effecting strongholds
  const effectingStronghold = effectingObjs
    .map((id) => {
      const obj = G.cells[id];
      const strong = G.places[id];
      return strong && strong.defenseAdd > 0 && obj && obj.canAddDef ? strong : null;
    })
    .filter((obj) => obj) as Stronghold[];
  const strongholdDef = effectingStronghold.map((obj) => obj.defenseAdd).reduce((a, b) => a + b, 0);

  //get charged cavalries
  const chargedCavalries = getChargedCavalries(G, CId)
    .flat()
    .map((rPos) => {
      let aCId = Pos2CId(pos.x + rPos.x, pos.y + rPos.y);
      return aCId;
    });
  const chargedAmount = chargedCavalries.length;

  var addValue = 0;
  //if it is offensive, merge objs in range and in charge
  if (targetObj && targetObj.belong !== player && isOffense) {
    // add and merge cavalries
    effectingObjs = Array.from(new Set([...effectingObjs, ...chargedCavalries]));

    // add charge value
    addValue = 3 * chargedAmount;
  } else if (!isOffense) {
    addValue = strongholdDef;
  }

  return [
    effectingObjs
      .map((id) => G.cells[id] as ObjInstance)
      .map((obj) => (isOffense ? obj.offense : obj.defense))
      .reduce((a, b) => a + b, addValue),
    effectingObjs,
  ];
}

function isInRange(pos: Position, oPos: Position, obj: ObjInstance): boolean {
  const dirDis = DirectDistance(pos, oPos);
  return NaiveDistance(pos, oPos) <= 3 && dirDis !== null && dirDis <= obj.range;
}

//Supply

export function dirSupplyFrom(G: GameState, CId: CellID, player: P_ID) {
  let result = searchInMiShape(
    G,
    CId,
    (obj, id) =>
      //filter the objs block the supply lines
      //obj is enemy, has offense factor, is supplied, not retreat
      //and mountains also block
      !(obj && obj.belong !== player && obj.offense > 0 && obj.supplied) && G.places[id]?.placeType !== 'Mountain',
  );
  return result[0];
}

export function getDirSuppliedLines(G: GameState, player: P_ID): [CellID[], CellID[][][]] {
  //get arsenals CId and relays CId
  const arsenalLst = filterCId(G.places, (str) => str.belong === player && str.placeType === 'Arsenal');
  const relayLst = filterCId(G.cells, (obj) => obj.belong === player && obj.objType === 'Relay');
  // get direct supply lines
  let dirSuppliedLines = arsenalLst.map((aId) => dirSupplyFrom(G, aId, player));
  let dirSupplied = dirSuppliedLines.flat(2);
  let dirRelayLst = [];
  //if relay is on direct, then add more supply lines, iterate as many times as relay units on has
  for (let i = 0; i < 2; i++) {
    dirRelayLst = relayLst.filter((rId) => dirSupplied.includes(rId));
    dirSuppliedLines = dirSuppliedLines.concat(dirRelayLst.map((rId) => dirSupplyFrom(G, rId, player)));
    dirSupplied = dirSuppliedLines.flat(2);
  }

  return [removeDup(dirSupplied), dirSuppliedLines];
}

export function getSuppliedCells(G: GameState, player: P_ID): CellID[] {
  const dirSupplied = getDirSuppliedLines(G, player)[0];
  //get the connected component of supplied pieces
  const myPieceLst = filterCId(G.cells, (obj) => obj.belong === player);
  const myPieceDirSupplied = myPieceLst.filter((id) => dirSupplied.includes(id));

  const mySuppliedPieces = connectedComponents(myPieceLst, myPieceDirSupplied);
  //supplied=dirSupplied+ dis<1 of supplied pieces
  //const suppliedCells= removeDup(G.cells.map((_,id)=>id).filter((_,id) =>ptSetDisLessThan(myPieceDirSupplied,id)).concat(dirSupplied));
  return mySuppliedPieces;
}

//Game Object

//type Entity = number
type ObjType = 'Infantry' | 'Cavalry' | 'Artillery' | 'Swift_Artillery' | 'Relay' | 'Swift_Relay';

export const objTypeList: readonly ObjType[] = [
  'Infantry',
  'Cavalry',
  'Artillery',
  'Swift_Artillery',
  'Relay',
  'Swift_Relay',
];
interface ObjData {
  readonly typeName: ObjType;
  readonly objType: ObjType; // functional type
  readonly objRender: string; //emoji
  readonly speed: number;
  readonly range: number;
  readonly offense: number;
  //readonly offenseOnCharge?:number, +3 for "Cavalry"
  readonly defense: number;
  readonly canAddDef: boolean;
  //readonly defenseInMountain:number, +2 for "Infantry" and "Artillery"
  //readonly defenseInFort:number +4
}
export interface ObjInstance extends ObjData {
  //entity: Entity,
  belong: P_ID;
  supplied: boolean;
  retreating: boolean;
}

type Type2ObjData = {
  [Key in ObjType]: ObjData;
};
export const objDataList: Type2ObjData = {
  Infantry: {
    typeName: 'Infantry',
    objType: 'Infantry',
    objRender: '💂',
    speed: 1,
    range: 2,
    offense: 4,
    defense: 6,
    canAddDef: true,
  },
  Cavalry: {
    typeName: 'Cavalry',
    objType: 'Cavalry',
    objRender: '🏇',
    speed: 2,
    range: 2,
    offense: 4,
    defense: 5,
    canAddDef: false,
  },
  Artillery: {
    typeName: 'Artillery',
    objType: 'Artillery',
    objRender: '🎉',
    speed: 1,
    range: 3,
    offense: 5,
    defense: 8,
    canAddDef: true,
  },
  Swift_Artillery: {
    typeName: 'Swift_Artillery',
    objType: 'Artillery',
    objRender: '🚀',
    speed: 2,
    range: 3,
    offense: 5,
    defense: 8,
    canAddDef: true,
  },
  Relay: {
    typeName: 'Relay',
    objType: 'Relay',
    objRender: '🚩',
    speed: 1,
    range: 2,
    offense: 0,
    defense: 1,
    canAddDef: false,
  },
  Swift_Relay: {
    typeName: 'Swift_Relay',
    objType: 'Relay',
    objRender: '🚚',
    speed: 2,
    range: 2,
    offense: 0,
    defense: 1,
    canAddDef: false,
  },
};

export function newPiece(type: ObjType, be: P_ID): ObjInstance {
  const objData = objDataList[type];
  return {
    ...objData,
    //entity:ent,
    belong: be,
    supplied: true,
    retreating: false,
  };
}

type StrongholdType = 'Arsenal' | 'Pass' | 'Fortress' | 'Mountain';
export const strongholdTypeList: readonly StrongholdType[] = ['Arsenal', 'Fortress', 'Pass', 'Mountain'];
interface Stronghold {
  readonly placeType: StrongholdType;
  readonly defenseAdd: number;
  readonly placeRender: string;
  belong: P_ID | null;
}

export function newStronghold(type: StrongholdType, belong: P_ID | null = null): Stronghold {
  return {
    placeType: type,
    defenseAdd: renderPlaceByType(type)[1],
    placeRender: renderPlaceByType(type)[0],
    belong: belong,
  };
}
export function renderPlaceByType(t: StrongholdType): [string, number] {
  switch (
    t //render and def Add
  ) {
    case 'Arsenal':
      return ['🎪', 0];
    case 'Pass':
      return ['🛣️', 2];
    case 'Fortress':
      return ['🏰', 4];
    case 'Mountain':
      return ['⛰️', 0];
  }
}
