import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { card2str } from 'gamesShared/helpers/cards';
import { Suit } from 'gamesShared/definitions/cards';

import { SixtysixGame } from '../game';

function cards2str(cards: ICard): string {
  return cards.map((C) => card2str(C)).join(' ');
}

function selectCards(p: Client, pos: number, str: string) {
  const cards = p.getState().G.players[pos].hand.map((C) => card2str(C));
  p.moves.SelectCards(
    str.split(' ').map((C) => {
      const idx = cards.indexOf(C);
      expect(idx).not.toEqual(-1);
      return idx;
    }),
  );
}

it('correctly plays a round with stock running empty', () => {
  const spec = {
    game: { ...SixtysixGame, seed: 20 },
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' });
  const p1 = Client({ ...spec, playerID: '1' });

  p0.start();
  p1.start();

  let G = p0.getState().G;
  expect(cards2str(G.players[0].hand)).toEqual('D9 SJ SQ S10 CQ CA');
  G = p1.getState().G;
  expect(cards2str(G.players[1].hand)).toEqual('DK D10 H10 S9 SA C10');
  // stock (not revealed): CK HQ HA DQ HJ C9 HK CJ H9 SK DJ DA
  expect(card2str(p0.getState().G.stock[0])).toEqual('CK');
  expect(p1.getState().G.trumpSuit).toEqual(Suit.Clubs);

  expect(p1.getState().ctx.currentPlayer).toEqual('1');
  expect(p1.getState().G.trick.leaderId).toEqual('1');
  expect(p1.getState().G.trick.cards.length).toEqual(0);
  expect(p0.getState().G.players[0].hand.length).toEqual(6);
  expect(p1.getState().G.players[1].hand.length).toEqual(6);
  expect(p1.getState().G.stock.length).toEqual(12);

  selectCards(p1, 1, 'S9');

  expect(p1.getState().ctx.currentPlayer).toEqual('0');
  expect(p0.getState().G.trick.cards.length).toEqual(1);
  expect(p0.getState().G.players[0].hand.length).toEqual(6);
  expect(p0.getState().G.players[1].hand.length).toEqual(5);
  expect(p0.getState().G.trick.cards.map(card2str)[0]).toEqual('S9');

  selectCards(p0, 0, 'SJ');

  expect(p1.getState().ctx.currentPlayer).toEqual('0');
  expect(p0.getState().G.trick.leaderId).toEqual('0');
  expect(p0.getState().G.trick.cards.length).toEqual(0);
  expect(p0.getState().G.resolvedTricks.length).toEqual(1);
  expect(p0.getState().G.resolvedTricks[0].winnerId).toEqual('0');
  expect(p0.getState().G.players[0].hand.length).toEqual(5);
  expect(p0.getState().G.players[1].hand.length).toEqual(5);

  p0.moves.DrawCards(); // DJ DA

  expect(p0.getState().G.players[0].hand.length).toEqual(6);
  expect(p0.getState().G.players[1].hand.length).toEqual(6);
  expect(p0.getState().G.stock.length).toEqual(10);
  expect(card2str(p0.getState().G.stock[0])).toEqual('CK');

  G = p0.getState().G;
  expect(cards2str(G.players[0].hand)).toEqual('D9 DA SQ S10 CQ CA');
  G = p1.getState().G;
  expect(cards2str(G.players[1].hand)).toEqual('DJ DK D10 H10 SA C10');

  selectCards(p0, 0, 'D9');
  selectCards(p1, 1, 'DJ');
  p1.moves.DrawCards(); // H9 SK

  selectCards(p1, 1, 'SK');
  selectCards(p0, 0, 'SQ');
  p1.moves.DrawCards(); // HK CJ

  selectCards(p1, 1, 'CJ');
  selectCards(p0, 0, 'H9');
  p1.moves.DrawCards(); // HJ C9

  // player 1 (automatically) replaced the CK under the stock with C9
  expect(card2str(p0.getState().G.stock[0])).toEqual('C9');

  selectCards(p1, 1, 'CK');
  selectCards(p0, 0, 'CQ');
  p1.moves.DrawCards(); // HA DQ

  p1.moves.Meld(Suit.Diamonds); // worth 20

  selectCards(p1, 1, 'DQ');
  selectCards(p0, 0, 'DA');
  p0.moves.DrawCards(); // C9 HQ

  expect(p0.getState().G.stock.length).toEqual(0);
  expect(p0.getState().G.closed).toEqual(true);

  selectCards(p0, 0, 'HA');
  selectCards(p1, 1, 'H10');
  selectCards(p0, 0, 'HK');
  selectCards(p1, 1, 'C10');
  selectCards(p1, 1, 'SA');
  selectCards(p0, 0, 'S10');

  p1.moves.GoOut();

  // round ends and is evaluated automatically
  G = p0.getState().G;
  expect(G.roundSummaries.length).toEqual(1);
  expect(G.roundSummaries[0]).toEqual({
    winnerId: '1',
    points: [37, 73],
    schneider: NaN,
    schwarz: NaN,
    againstClose: NaN,
    againstOut: NaN,
    scoring: [0, 1],
  });

  // all cards of the round are revealed now
  expect(cards2str(G.deck)).toEqual('D9 SJ S10 SQ CQ CA S9 DK SA H10 D10 C10 CK HQ HA DQ HJ C9 HK CJ H9 SK DJ DA');
});

it('correctly evaluates a round where player closes but loses', () => {
  const spec = {
    game: { ...SixtysixGame, seed: 21 },
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' });
  const p1 = Client({ ...spec, playerID: '1' });

  p0.start();
  p1.start();

  selectCards(p1, 1, 'D9');
  selectCards(p0, 0, 'C9');
  p1.moves.DrawCards(); // DA SA

  selectCards(p1, 1, 'DJ');
  selectCards(p0, 0, 'CJ');
  p1.moves.DrawCards(); // C10 HA

  p1.moves.Close();
  selectCards(p1, 1, 'SA');
  selectCards(p0, 0, 'SQ');
  selectCards(p1, 1, 'S10');
  selectCards(p0, 0, 'H10');
  selectCards(p0, 0, 'DA');
  selectCards(p1, 1, 'DQ');
  selectCards(p0, 0, 'C10');
  selectCards(p1, 1, 'HA');

  // player goes out prematurely
  p1.moves.GoOut();

  // round ends and is evaluated automatically
  const G = p0.getState().G;
  expect(G.roundSummaries[0]).toEqual({
    winnerId: '0',
    points: [34, 39],
    schneider: NaN,
    schwarz: NaN,
    againstClose: 2,
    againstOut: NaN,
    scoring: [3, 0],
  });

  // all cards of the round are revealed now
  expect(cards2str(G.deck)).toEqual('SQ DK CQ C9 H10 CJ D10 DQ S10 DJ SJ D9 HK S9 SK CA HJ HQ CK H9 C10 HA DA SA');
});

it('correctly evaluates a round where player goes out early', () => {
  const spec = {
    game: { ...SixtysixGame, seed: 22 },
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' });
  const p1 = Client({ ...spec, playerID: '1' });

  p0.start();
  p1.start();

  selectCards(p1, 1, 'DJ');
  selectCards(p0, 0, 'D10');
  p0.moves.DrawCards(); // S10 HA

  // player goes out prematurely
  p0.moves.GoOut();

  // round ends and is evaluated automatically
  const G = p0.getState().G;
  expect(G.roundSummaries[0]).toEqual({
    winnerId: '1',
    points: [12, 0],
    schneider: NaN,
    schwarz: NaN,
    againstClose: NaN,
    againstOut: 1,
    scoring: [0, 2],
  });
});

it('correctly evaluates a round where player wins schneider', () => {
  const spec = {
    game: { ...SixtysixGame, seed: 22 },
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' });
  const p1 = Client({ ...spec, playerID: '1' });

  p0.start(); // D10 DA HJ HK H10 S9
  p1.start(); // DJ DK HQ C10 H9 SK
  // trump card: SA

  selectCards(p1, 1, 'DJ');
  selectCards(p0, 0, 'D10');
  p0.moves.DrawCards(); // S10 HA

  selectCards(p0, 0, 'HJ');
  selectCards(p1, 1, 'HQ');
  p1.moves.DrawCards(); // CQ DQ

  p1.moves.Meld(Suit.Diamonds);

  selectCards(p1, 1, 'DQ');
  selectCards(p0, 0, 'DA');
  p0.moves.DrawCards(); // SQ CJ

  selectCards(p0, 0, 'CJ');
  selectCards(p1, 1, 'C10');

  p1.moves.Meld(Suit.Spades);
  p1.moves.GoOut();

  // round ends and is evaluated automatically
  const G = p0.getState().G;
  expect(G.roundSummaries[0]).toEqual({
    winnerId: '1',
    points: [26, 77],
    schneider: 1,
    schwarz: NaN,
    againstClose: NaN,
    againstOut: NaN,
    scoring: [0, 2],
  });

  // all cards of the round are revealed now
  expect(cards2str(G.deck)).toEqual('HK D10 S9 H10 DA HJ C10 SK HQ DK H9 DJ SA C9 CA SJ CK D9 SQ CJ CQ DQ S10 HA');
});
