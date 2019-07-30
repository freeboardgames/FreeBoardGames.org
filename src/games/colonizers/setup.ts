import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
import { IG, Resource, Tile, IRoad, IBuilding, sumCoords, inBounds, ICoords } from './game';

function toIndex(coords: ICoords): number {
  return coords.x + 2 + 5 * (coords.y + 2);
}

export function gameSetup(ctx: IGameCtx): IG {
  const DIRS: ICoords[] = [
    { x: 0, y: 1, z: -1 },
    { x: 1, y: 0, z: -1 },
    { x: 1, y: -1, z: 0 },
    { x: 0, y: -1, z: 1 },
    { x: -1, y: 0, z: 1 },
    { x: -1, y: 1, z: 0 },
  ];

  let resources = ctx.random.Shuffle([
    Resource.Ore,
    Resource.Ore,
    Resource.Ore,
    Resource.Grain,
    Resource.Grain,
    Resource.Grain,
    Resource.Grain,
    Resource.Lumber,
    Resource.Lumber,
    Resource.Lumber,
    Resource.Lumber,
    Resource.Wool,
    Resource.Wool,
    Resource.Wool,
    Resource.Wool,
    Resource.Brick,
    Resource.Brick,
    Resource.Brick,
    Resource.Nothing,
  ]);

  let robber: number = 2;

  // Init tiles
  let tiles: Tile[] = new Array();
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        if (x + y + z === 0) {
          const resource = resources.pop();
          tiles[toIndex({ x, y })] = new Tile({ x, y, z }, resource, toIndex({ x, y }));
          if (resource === Resource.Nothing) {
            robber = toIndex({ x, y });
          }
        }
      }
    }
  }

  // Fill 6s and 8s in
  let safeIndices = ctx.random.Shuffle(
    tiles.filter(tile => tile !== null && tile.type !== Resource.Nothing).map(tile => tile.index),
  );
  let specialNumbers = [6, 6, 8, 8];
  while (specialNumbers.length > 0) {
    const number = specialNumbers.pop();
    const index = safeIndices.pop();
    const tile = tiles[index];
    tile.number = number;
    DIRS.forEach(dir => {
      const sum = sumCoords(tile.pos, dir);
      if (inBounds(sum)) {
        safeIndices = safeIndices.filter(index => index !== toIndex(sum));
      }
    });
  }

  // Fill other numbers
  let numbers = ctx.random.Shuffle([2, 3, 3, 4, 4, 5, 5, 9, 9, 10, 10, 11, 11, 12]);
  for (const tile of tiles) {
    if (typeof tile !== 'undefined' && tile.number === null && tile.type !== Resource.Nothing) {
      tile.number = numbers.pop();
    }
  }

  // Init roads and buildings
  let roads: IRoad[] = [];
  let buildings: IBuilding[] = [];
  tiles.forEach((tile, j) => {
    DIRS.forEach((dir, i) => {
      if (typeof tile.roads[i] === 'undefined') {
        roads.push({
          owner: null,
          tileRefs: [
            {
              dir: i,
              tile: j,
            },
          ],
          buildingRefs: [],
          index: roads.length,
        });

        tile.roads[i] = roads.length - 1;
        // Check if adjacent tile exists
        const sum = sumCoords(tile.pos, dir);
        if (inBounds(sum)) {
          tiles[toIndex(sum)].roads[(i + 3) % 6] = roads.length - 1;
          roads[roads.length - 1].tileRefs.push({
            dir: (i + 3) % 6,
            tile: toIndex(sum),
          });
        }
      }

      if (typeof tile.buildings[i] === 'undefined') {
        buildings.push({
          type: null,
          tileRefs: [
            {
              dir: i,
              tile: j,
            },
          ],
          owner: null,
          roadRefs: [],
          index: buildings.length,
        });

        tile.buildings[i] = buildings.length - 1;

        const sumUp = sumCoords(tile.pos, dir);
        if (inBounds(sumUp)) {
          tiles[toIndex(sumUp)].buildings[(i + 2) % 6] = buildings.length - 1;
          buildings[buildings.length - 1].tileRefs.push({
            dir: (i + 2) % 6,
            tile: toIndex(sumUp),
          });
        }

        const sumRight = sumCoords(tile.pos, DIRS[(i + 1) % 6]);
        if (inBounds(sumRight)) {
          tiles[toIndex(sumRight)].buildings[(i + 4) % 6] = buildings.length - 1;
          buildings[buildings.length - 1].tileRefs.push({
            dir: (i + 4) % 6,
            tile: toIndex(sumRight),
          });
        }
      }
    });
  });

  // Build road references
  roads.forEach(road => {
    const tileRef = road.tileRefs[0];
    road.buildingRefs.push(tiles[tileRef.tile].buildings[tileRef.dir]);
    road.buildingRefs.push(tiles[tileRef.tile].buildings[(tileRef.dir + 5) % 6]);
  });

  // Build building references
  buildings.forEach(building => {
    let roadRefs = new Set<number>();
    building.tileRefs.forEach(ref => {
      roadRefs.add(tiles[ref.tile].roads[ref.dir]);
      roadRefs.add(tiles[ref.tile].roads[(ref.dir + 1) % 6]);
    });
    building.roadRefs = Array.from(roadRefs);
  });

  // Build turn order
  let initialTurnOrder = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    initialTurnOrder.push(i.toString());
  }
  for (let i = ctx.numPlayers - 1; i >= 0; i--) {
    initialTurnOrder.push(i.toString());
  }

  const players = new Array(ctx.numPlayers).fill(0).map((_, i) => ({
    id: i.toString(),
    resources: new Array(5).fill(0),
    score: 0,
  }));

  return {
    tiles,
    buildings,
    roads,
    players,
    initialTurnOrder,
    robber,
  };
}
