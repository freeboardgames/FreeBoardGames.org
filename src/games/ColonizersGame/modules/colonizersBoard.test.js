import {
  newBoard,
  newTile,
  circularGet
} from './colonizersBoard.js';


describe('colonizersBoard', () => {
  var board;
  beforeEach(() => {
    board = newBoard();
  });

  describe('Tiles', () => {
    it ('should have 5 rows', () => {
      expect(board.tiles.length).to.eql(5);
    });
    it ('should have 5 columns', () => {
      expect(board.tiles[0].length).to.eql(5);
    });
    it ('each tile type should have x and y', () => {
      for (let y in board.tiles) {
        for (let x in board.tiles[y]) {
          let tile = board.tiles[y][x];
          expect(typeof(tile.x)).to.eql('number');
          expect(typeof(tile.y)).to.eql('number');
        }
      }
    });
    it('each tile on the same column should share edge', () => {
      for (let y in board.tiles) {
        for (let x in board.tiles[y]) {
          let tile = board.tiles[y][x];
          let rowBelow = board.tiles[x+1];
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
    it ('each tile type should be between [-1,4]', () => {
      for (let y in board.tiles) {
        for (let x in board.tiles[y]) {
          let tile = board.tiles[y][x];
          if (!tile.active) {
            continue;
          }
          expect(tile.type <= 4).to.eql(true);
          expect(tile.type >= -1).to.eql(true);
        }
      }
    });
    it ('each tile should be between [2,12]', () => {
      for (let y in board.tiles) {
        for (let x in board.tiles[y]) {
          let tile = board.tiles[y][x];
          if (!tile.active) {
            continue;
          }
          expect(tile.value <= 12).to.eql(true);
          expect(tile.value >= 2).to.eql(true);
        }
      }
    });
    it ('each tile should have 6 valid edges', () => {
      for (let y in board.tiles) {
        for (let x in board.tiles[y]) {
          let tile = board.tiles[y][x];
          if (!tile.active) {
            continue;
          }
          expect(tile.edges.length).to.eql(6);
          for (let j in tile.edges) {
            let edge = tile.edges[j];
            expect(edge < board.edges.length).to.eql(true);
          }
        }
      }
    });
  });
  describe('Edges', () => {
    it ('should have 2 valid points', () => {
      for (let i in board.edges) {
        let edge = board.edges[i];
        expect(edge.points.length).to.eql(2);
        for (let j in edge.points) {
          let point = edge.points[j];
          expect(point < board.points.length).to.eql(true);
        }
      }
    });
    it ('should have an owner', () => {
      for (let i in board.edges) {
        let edge = board.edges[i];
        expect(typeof(edge.owner)).to.eql('number');
      }
    });
    it ('should have length of 1', () => {
      for (let i in board.edges) {
        let edge = board.edges[i];
        let point0 = board.points[edge.points[0]];
        let point1 = board.points[edge.points[1]];
        expect(+Math.sqrt(Math.pow(point0.x - point1.x, 2) +
                         Math.pow(point0.y - point1.y, 2)).toFixed(1)).to.eql(1.0);
      }
    });
  });
  describe('Points', () => {
    it ('should have an x and an y', () => {
      for (let i in board.points) {
        let point = board.points[i];
        expect(typeof(point.x)).to.eql('number');
        expect(typeof(point.y)).to.eql('number');
      }
    });
    it ('should have an owner', () => {
      for (let i in board.points) {
        let point = board.points[i];
        expect(typeof(point.owner)).to.eql('number');
      }
    });
    it ('should have an building', () => {
      for (let i in board.points) {
        let point = board.points[i];
        expect(point.building >= -1).to.eql(true);
        expect(point.building <= 1).to.eql(true);
      }
    });
    it ('should have correct X,Y for point 0 of (x=2,y=2)', () => {
      let tile = board.tiles[2][2];
      let edge = board.edges[tile.edges[0]];
      let point = board.points[edge.points[0]];
      expect(point.x).to.eql(5);
      expect(point.y).to.eql(2.5 * Math.sqrt(3));
    });
    it ('should have correct X,Y for point 1 of (x=2,y=4)', () => {
      let tile = board.tiles[4][2];
      expect(tile.x).to.eql(4);
      expect(tile.y).to.eql(4.5 * Math.sqrt(3));
      let edge = board.edges[tile.edges[1]];
      let point = board.points[edge.points[1]];
      expect(point.x).to.eql(4.5);
      expect(point.y).to.eql(4 * Math.sqrt(3));
    });
  });
  describe('Port', () => {
    it ('should have an edge', () => {
      for (let i in board.ports) {
        let port = board.ports[i];
        expect(typeof(port.edge)).to.eql('number');
      }
    });
    it ('should have a type', () => {
      for (let i in board.ports) {
        let port = board.ports[i];
        expect(port.type >= 0).to.eql(true);
        expect(port.type <= 4).to.eql(true);
      }
    });
  });
  describe('Functions', () => {
    var board;
    beforeEach(() => {
      board = {tiles: [],
        edges: [],
        points: [],
        ports: []};
    });
    it ('should return correct X,Y for first tile', () => {
      let tile = newTile(board, 0, 0);
      expect(tile.x).to.eql(1);
      expect(tile.y).to.eql(Math.sqrt(3)/2);
    });
    it ('should return correct X,Y for some tiles', () => {
      let CORRECT_Y_X = {0: {4: {x: 7, y: Math.sqrt(3)/2}},
        2: {2: {x: 4, y: 2.5 * Math.sqrt(3)}},
        3: {1: {x: 2.5, y: 4 * Math.sqrt(3)}}};
      for (let y = 0; y<=4; y++) {
        board.tiles.push([]);
        for (let x = 0; x<=4; x++) {
          let tile = newTile(board, x, y);
          if (CORRECT_Y_X[y] && CORRECT_Y_X[y][x]) {
            expect(Math.abs(tile.x - CORRECT_Y_X[y][x].x) <= 0.001).to.eql(true);
            expect(Math.abs(tile.y - CORRECT_Y_X[y][x].y) <= 0.001).to.eql(true);
          }
          board.tiles[y].push(tile);
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
});
