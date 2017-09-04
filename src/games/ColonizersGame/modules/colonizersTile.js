const INACTIVE_TILES = {0: {0: true, 4: true},
    4: {0: true, 1: true, 3: true, 4: true}};

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
    let edges = [null, null, null,
        null, null, null];
    if ((x%2) == 0) {
        edges[2] = tryToGetEdge(board.tiles, x-1, y, 5);
        edges[3] = tryToGetEdge(board.tiles, x-1, y-1, 0);
        edges[4] = tryToGetEdge(board.tiles, x, y-1, 1);
    } else {
        edges[3] = tryToGetEdge(board.tiles, x-1, y, 0);
        edges[4] = tryToGetEdge(board.tiles, x, y-1, 1);
    }

  //Replace null with edges. Share points as needed.
    for (let i=0; i<edges.length; i++) {
        if (edges[i] != null) {
            continue;
        }
        let edgeBeforeIndex = circularGet(edges, i-1);
        let edgeAfterIndex = circularGet(edges, i+1);
        let firstPoint = null;
        if (edgeBeforeIndex != null) {
            firstPoint = board.edges[edgeBeforeIndex].points[1];
        }
        let secondPoint = null;
        if (edgeAfterIndex != null) {
            secondPoint = board.edges[edgeAfterIndex].points[0];
        }
        let points = [firstPoint, secondPoint];
        for (let j=0; j<points.length; j++) {
            if (points[j] != null) {
                continue;
            }
            points[j] = board.points.length;
      //TODO(calculate X,Y)
            board.points.push({x: 0, y:0,
                owner: -1, building: -1});
        }
        edges[i] = board.edges.length;
        board.edges.push({points: points, owner: -1});
    }
    tile.edges = edges;
    return tile;
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
