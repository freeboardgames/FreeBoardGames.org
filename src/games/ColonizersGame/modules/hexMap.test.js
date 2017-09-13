import {
  newHexMap,
  newTile,
  circularGet,
  getTileNeighbors
} from './hexMap.js';
import {
  HIDDEN_MAP_CELLS_Y_X
} from './colonizersGameConstants.js';

describe('5x5 hex map', () => {
  var map;
  beforeEach(() => {
    map = newHexMap(5, 5, HIDDEN_MAP_CELLS_Y_X);
  });

  describe('Tiles', () => {
    it ('should have 5 rows', () => {
      expect(map.tiles.length).to.eql(5);
    });
    it ('should have 5 columns', () => {
      expect(map.tiles[0].length).to.eql(5);
    });
    it ('each tile type should have x and y', () => {
      for (let y in map.tiles) {
        for (let x in map.tiles[y]) {
          let tile = map.tiles[y][x];
          expect(typeof(tile.x)).to.eql('number');
          expect(typeof(tile.y)).to.eql('number');
        }
      }
    });
    it('each tile on the same column should share edge', () => {
      for (let y in map.tiles) {
        for (let x in map.tiles[y]) {
          let tile = map.tiles[y][x];
          let rowBelow = map.tiles[x+1];
          if (!rowBelow || !tile.active) {
            continue;
          }
          let tileBelow = rowBelow[y];
          if (!tileBelow.active) {
            continue;
          }
          expect(tile.edges[1]).to.eql(tileBelow.edges[4]);
        }
      }
    });
    it ('each tile should have 6 valid edges', () => {
      for (let y in map.tiles) {
        for (let x in map.tiles[y]) {
          let tile = map.tiles[y][x];
          if (!tile.active) {
            continue;
          }
          expect(tile.edges.length).to.eql(6);
          for (let j in tile.edges) {
            let edge = tile.edges[j];
            expect(edge < map.edges.length).to.eql(true);
          }
        }
      }
    });
  });
  describe('Edges', () => {
    it ('should have 2 valid points', () => {
      for (let i in map.edges) {
        let edge = map.edges[i];
        expect(edge.points.length).to.eql(2);
        for (let j in edge.points) {
          let point = edge.points[j];
          expect(point < map.points.length).to.eql(true);
        }
      }
    });
    it ('should have length of 1', () => {
      for (let i in map.edges) {
        let edge = map.edges[i];
        let point0 = map.points[edge.points[0]];
        let point1 = map.points[edge.points[1]];
        expect(+Math.sqrt(Math.pow(point0.x - point1.x, 2) +
                         Math.pow(point0.y - point1.y, 2)).toFixed(1)).to.eql(1.0);
      }
    });
    it ('should have correct X,Y for edge 0 of (x=2,y=2)', () => {
      let tile = map.tiles[2][2];
      let edge = map.edges[tile.edges[0]];
      let point0 = map.points[edge.points[0]];
      let point1 = map.points[edge.points[1]];
      //We should not assume the order of the points in given edge
      let expY = 2.5 * Math.sqrt(3);
      expect(point0.x == 5 || point1.x == 5).to.eql(true);
      expect(point1.y == expY || point1.y == expY).to.eql(true);
    });
    it ('should have correct X,Y for edge 1 of (x=2,y=4)', () => {
      let tile = map.tiles[4][2];
      let edge = map.edges[tile.edges[1]];
      let point0 = map.points[edge.points[0]];
      let point1 = map.points[edge.points[1]];
      let expY = 4 * Math.sqrt(3);
      expect(point0.x == 4.5 || point1.x == 4.5).to.eql(true);
      expect(point0.y == expY || point1.y == expY).to.eql(true);
    });
    it ('should not have overlapping edges', () => {
      let p0_p1_mapping = {};
      for (let i in map.edges) {
        let edge = map.edges[i];
        let p0 = edge.points[0];
        let p1 = edge.points[1];
        if (!(p0 in p0_p1_mapping)) {
          p0_p1_mapping[p0] = {};
        }
        if (!(p1 in p0_p1_mapping)) {
          p0_p1_mapping[p1] = {};
        }
        if (p0_p1_mapping[p0][p1] === true ||
            p0_p1_mapping[p1][p0] === true) {
          throw new Error(`OVERLAPPING EDGES p0: ${p0} p1: ${p1}`);
        }
        p0_p1_mapping[p0][p1] = true;
        p0_p1_mapping[p1][p0] = true;
      }
    });
  });
  describe('Points', () => {
    it ('should have an x and an y', () => {
      for (let i in map.points) {
        let point = map.points[i];
        expect(typeof(point.x)).to.eql('number');
        expect(typeof(point.y)).to.eql('number');
      }
    });
    it ('should not have overlapping points', () => {
      let x_y_mapping = {};
      for (let i in map.points) {
        let point = map.points[i];
        let x = +point.x.toFixed(2);
        let y = +point.y.toFixed(2);
        if (!(x in x_y_mapping)) {
          x_y_mapping[x] = {};
        }
        if (x_y_mapping[x][y] === true) {
          throw new Error(`OVERLAPPING POINTS ON X: ${x} Y: ${y}`);
        }
        x_y_mapping[x][y] = true;
      }
    });
  });
  describe('Small map', () => {
    var map;
    beforeEach(() => {
      map = {tiles: [],
        edges: [],
        points: []};
    });
    it ('should return correct X,Y for first tile', () => {
      let tile = newTile(map, 0, 0);
      expect(tile.x).to.eql(1);
      expect(tile.y).to.eql(Math.sqrt(3)/2);
    });
    it ('should return correct X,Y for some tiles', () => {
      let CORRECT_Y_X = {0: {4: {x: 7, y: Math.sqrt(3)/2}},
        2: {2: {x: 4, y: 2.5 * Math.sqrt(3)}},
        3: {1: {x: 2.5, y: 4 * Math.sqrt(3)}}};
      for (let y = 0; y<=4; y++) {
        map.tiles.push([]);
        for (let x = 0; x<=4; x++) {
          let tile = newTile(map, x, y);
          if (CORRECT_Y_X[y] && CORRECT_Y_X[y][x]) {
            expect(Math.abs(tile.x - CORRECT_Y_X[y][x].x) <= 0.001).to.eql(true);
            expect(Math.abs(tile.y - CORRECT_Y_X[y][x].y) <= 0.001).to.eql(true);
          }
          map.tiles[y].push(tile);
        }
      }
    });
    it ('should have correct circular get array', () => {
      let arr = [10,20,30,40];
      expect(circularGet(arr, 5)).to.eql(20);
      expect(circularGet(arr, 10)).to.eql(30);
      expect(circularGet(arr, -1)).to.eql(40);
      expect(circularGet(arr, -5)).to.eql(40);
    });
  });
  describe('Operations', () => {
    it('should get correct tile neighbors on the middle', () => {
      expect(getTileNeighbors(map, 2, 2)).to.have.deep.members([{y: 1, x: 1},
                                                                {y: 1, x: 2},
                                                                {y: 1, x: 3},
                                                                {y: 2, x: 1},
                                                                {y: 2, x: 3},
                                                                {y: 3, x: 2}]);
    });
    it('should get correct tile neighbors on the border', () => {
      expect(getTileNeighbors(map, 2, 0)).to.have.deep.members([{y: 0, x: 1},
                                                                {y: 1, x: 2},
                                                                {y: 0, x: 3}]);
    });
  });
});
