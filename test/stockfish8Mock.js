var StockfishMock = function() {};

StockfishMock.prototype.postMessage = function(cmd) {
  if (cmd.includes('go depth')) {
    this.onmessage({ data: 'not relevant message' });
    this.onmessage({ data: 'bestmove e2e3' });
  }
};

module.exports = StockfishMock;
