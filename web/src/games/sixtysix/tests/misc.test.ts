import { Suit } from 'gamesShared/definitions/cards';
import { str2trick, str2cards } from 'gamesShared/helpers/cards';

import { DefaultIPlayer, IG, DefaultIG } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';

function setup(): IG {
  const players = [
    { ...DefaultIPlayer, id: '0', hand: str2cards('D9 DJ D10 S9 HK CJ') },
    { ...DefaultIPlayer, id: '1', hand: str2cards('DQ DK DA S10 H10 C9') },
  ];
  const stock = str2cards('SJ SQ SK SA H9 HJ HQ HA CQ CK C10 CA');
  return {
    ...DefaultIG,
    players: players,
    deck: Array.prototype.concat(...players.map((P) => P.hand), stock),
    stock: stock,
    trick: { cards: [], leaderId: players[1].id },
    resolvedTricks: [],
    trumpSuit: Suit.Clubs,
  };
}

it('finds the winner of a given trick', () => {
  const G = setup();
  [
    ['D10 !DK', '0'],
    ['!HK H10', '1'],
    ['CJ !DQ', '0'],
    ['!D9 DQ', '1'],
    ['DJ !C9', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(
      getTrickWinnerId(
        G.trumpSuit,
        str2trick(
          s_trick,
          G.players.map((P) => P.id),
        ),
      ),
    ).toEqual(winnerId);
  });
});

it('correctly resolves a trick', () => {
  const G = setup();
  G.trick = str2trick(
    'S9 !S10',
    G.players.map((P) => P.id),
  );
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(1);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leaderId).toEqual(trick.winnerId);
  expect(trick.winnerId).toEqual('1');
});
