import {
  newHexMap
} from './hexMap.js';
import {
  generateTilesInfo
} from './colonizersTilesInfo.js';
import {
  HIDDEN_MAP_CELLS_Y_X,
  DEFAULT_TRADEPOSTS_Y_X_EDGE
} from './colonizersGameConstants.js';

describe('tilesInfo', () => {
  var tilesInfo;
  var map;
  beforeEach(() => {
    map = newHexMap(5, 5, HIDDEN_MAP_CELLS_Y_X);
    tilesInfo = generateTilesInfo(map, DEFAULT_TRADEPOSTS_Y_X_EDGE);
  });

  it('should have one type and number for every active tile', () => {
    for (let y in map.tiles) {
      for (let x in map.tiles[y]) {
        let tile = map.tiles[y][x];
        if (tile.active) {
          expect(tilesInfo[y][x].type).to.be.within(-1, 4);
          expect(tilesInfo[y][x].number).to.be.within(2, 12);
        }
      }
    }
  });
});
generateTilesInfo;
