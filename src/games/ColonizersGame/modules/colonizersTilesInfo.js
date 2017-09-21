import {
  getTileNeighbors
} from './hexMap.js';

export function generateTilesInfo(map, tradePosts) {
  if (countActiveTiles(map.tiles) != 19) {
    throw 'Map size not supported.';
  }
  let allTypes = [-1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4];

  //No 7 on allNumbers b/c it will be where type == -1
  let allNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

  var result;
  do {
    result = randomTilesArrangement(map, allTypes, allNumbers);
  } while (!goodEnoughTilesArrangement(map, result, tradePosts));
  return result;
}

function countActiveTiles(tiles) {
  let result = 0;
  for (let y in tiles) {
    for (let x in tiles[y]) {
      if (tiles[y][x].active) {
        result++;
      }
    }
  }
  return result;
}

function randomTilesArrangement(map, allTypes, allNumbers) {
  let result = {};
  let tempAllTypes =allTypes.slice();
  shuffle(tempAllTypes);
  let tempAllNumbers = allNumbers.slice();
  shuffle(tempAllNumbers);
  for (let y in map.tiles) {
    for (let x in map.tiles[y]) {
      let tile = map.tiles[y][x];
      if (!tile.active) {
        continue;
      }
      let type = tempAllTypes.pop();
      let number = 7;
      if (type != -1) {
        number = tempAllNumbers.pop();
      }
      if (!(y in result)) {
        result[y] = {};
      }
      result[y][x] = {type: type, number: number};
    }
  }
  return result;
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

function goodEnoughTilesArrangement(map, tilesInfo, tradePosts) {
  return !hasHighProbabilityTilesAsNeighbors(map, tilesInfo) &&
         !hasHighProbabilityTilesWithSameTypeTradePost(map, tilesInfo,
           tradePosts);
}

function isHighProbability(number) {
  return [6,8].includes(number);
}

function hasHighProbabilityTilesAsNeighbors(map, tilesInfo) {
  for (let y in map.tiles) {
    for (let x in map.tiles[y]) {
      let tile = map.tiles[y][x];
      if (!tile.active) {
        continue;
      }
      let tileInfo = tilesInfo[y][x];
      if (isHighProbability(tileInfo.number)) {
        let neighbors = getTileNeighbors(map, x, y);
        for (let i in neighbors) {
          let neighborCord = neighbors[i];
          let neighborNumber = tilesInfo[neighborCord.y][neighborCord.x].number;
          if (isHighProbability(neighborNumber)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function hasHighProbabilityTilesWithSameTypeTradePost(map, tilesInfo, tradePosts) {
  for (let y in map.tiles) {
    for (let x in map.tiles[y]) {
      let tile = map.tiles[y][x];
      if (!tile.active) {
        continue;
      }
      let tileInfo = tilesInfo[y][x];
      if (isHighProbability(tileInfo.number)) {
        if (!(y in tradePosts) || !(x in tradePosts[y])) {
          continue;
        }
        for (let edgeIndex in tradePosts[y][x]) {
          let tradePostType = tradePosts[y][x][edgeIndex].type;
          if (tradePostType != -1 && tradePostType === tilesInfo.type) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
