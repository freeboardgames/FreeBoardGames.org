import {
  default as colonizersReducer
} from './colonizersGameState.js';


describe('colonizersGameState', () => {
  describe('tradeposts', () => {
    var tradePosts;
    const EXPECTED_COUNT = {0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 4};
    beforeEach(() => {
      tradePosts = colonizersReducer(null, {type: 'NOOP'}).board.tradePosts;
    });
    it('should have the correct bounds', () => {
      for (let y in tradePosts) {
        for (let x in tradePosts[y]) {
          for (let edge in tradePosts[y][x]) {
            let tradePost = tradePosts[y][x][edge];
            expect(edge).to.be.within(0, 6);
            expect(x).to.be.within(0, 4);
            expect(y).to.be.within(0, 4);
            expect(tradePost.type).to.be.within(-1, 4);
          }
        }
      }
    });
    it('should have the correct count', () =>
      {
      let count = {};
      for (let y in tradePosts) {
        for (let x in tradePosts[y]) {
          for (let edge in tradePosts[y][x]) {
            let tradePost = tradePosts[y][x][edge];
            let type = tradePost.type;
            if (type == -1) {
              type = 5;
            }
            if (!(type in count)) {
              count[type] = 0;
            }
            count[type]++;
          }
        }
      }
      expect(count).to.eql(EXPECTED_COUNT);
    });
  });
});
