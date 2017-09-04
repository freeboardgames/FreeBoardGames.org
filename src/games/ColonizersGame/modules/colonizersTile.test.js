import {
  newTile,
  circularGet
} from './colonizersTile.js';


describe('colonizersTile', () => {
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
