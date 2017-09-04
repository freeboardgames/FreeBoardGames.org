import {
  newBoard
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
});
