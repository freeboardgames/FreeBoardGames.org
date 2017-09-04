const INACTIVE_TILES = {0: {0: true, 4: true},
  4: {0: true, 1: true, 3: true, 4: true}};

export function newBoard () {
  let board = {tiles: [],
    edges: [],
    points: [],
    ports: []
  };
  for (let y=0; y <= 4; y++) {
    board.tiles.push([]);
    for (let x=0; x <= 4; x++) {
      board.tiles[y].push(newTile(board, x, y));
    }
  }
  return board;
}

export function newTile (board, x, y) {
  // Calculate center
  let tile = {x: -1, y: -1, active: true};
  tile.x = 1 + 1.5 * x;
  if ((x % 2) === 0) {
    tile.y = Math.sqrt(3)/2 + Math.sqrt(3) * y;
  } else {
    tile.y = Math.sqrt(3) + Math.sqrt(3) * y;
  }
  // Calculate if it is inactive
  if (INACTIVE_TILES[x] && INACTIVE_TILES[x][y]) {
    tile.active = false;
    return tile;
  }

  //Assign bogus type and value for tile.
  //Server will need to setup correct values
  //as we have to be deterministic on the clients.
  tile.type = -1;
  tile.value = 7;

  // Reuse shared edges
  let edges = getSharedEdges(board.tiles, x, y);
  createMissingEdges(board, edges, tile);
  tile.edges = edges;
  return tile;
}

function getSharedEdges(tiles, x, y) {
  let result = [null, null, null,
    null, null, null];
  if ((x%2) == 0) {
    result[1] = tryToGetEdge(tiles, x, y-1, 4);
    result[2] = tryToGetEdge(tiles, x-1, y-1, 5);
    result[3] = tryToGetEdge(tiles, x-1, y, 0);
  } else {
    result[1] = tryToGetEdge(tiles, x, y-1, 4);
    result[2] = tryToGetEdge(tiles, x-1, y, 5);
  }
  return result;
}

function tryToGetEdge(tiles, x, y, edgeIndex) {
  if (y < 0 || y >= tiles.length) {
    return null;
  }
  if (x < 0 || x >= tiles[y].length) {
    return null;
  }
  let tile = tiles[y][x];
  if (!tile.active) {
    return null;
  }
  if (tile.edges[edgeIndex]) {
    return tile.edges[edgeIndex];
  }
  return null;
}

export function circularGet(arr, i) {
  if (i < 0) {
    i = arr.length + (i % arr.length);
  }
  i = (i % arr.length);
  return arr[i];
}

function createMissingEdges(board, edges, tile) {
  //Replace null with edges. Share points as needed.
  for (let i=0; i<edges.length; i++) {
    if (edges[i] != null) {
      continue;
    }
    let edgeBeforeIndex = circularGet(edges, i-1);
    let edgeAfterIndex = circularGet(edges, i+1);
    let firstPoint = null;
    if (edgeBeforeIndex != null) {
      firstPoint = board.edges[edgeBeforeIndex].points[0];
    }
    let secondPoint = null;
    if (edgeAfterIndex != null) {
      secondPoint = board.edges[edgeAfterIndex].points[1];
    }
    let points = [firstPoint, secondPoint];
    createMissingPoints(board, points, i, tile);
    edges[i] = board.edges.length;
    board.edges.push({points: points, owner: -1});
  }
}

function createMissingPoints(board, points, edgeIndex, tile) {
  for (let j=0; j<points.length; j++) {
    if (points[j] != null) {
      continue;
    }
    let pointIndex = (edgeIndex + j)%6;
    let teta = (Math.PI * pointIndex) / 3.0;
    let x2 = Math.cos(teta);
    let y2 = -1 * Math.sin(teta);
    points[j] = board.points.length;
    board.points.push({x: tile.x + x2, y: tile.y + y2,
      owner: -1, building: -1});
  }
}
