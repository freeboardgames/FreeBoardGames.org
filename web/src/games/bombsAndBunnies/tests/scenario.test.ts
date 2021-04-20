import { CardStyle, CardType, IG, Phases } from '../engine/interfaces';
import { BombsAndBunniesGame } from '../game';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { _ClientImpl } from 'boardgame.io/dist/types/src/client/client';
import * as Utilities from './utilities';

let _matchId = 0;

function setup(G: IG): _ClientImpl<any>[] {
  const matchId = (_matchId++).toString();
  const spec = {
    game: BombsAndBunniesGame,
    numPlayers: G.players.length,
    multiplayer: Local(),
  };

  const players = G.players.map((p) => {
    return Client({ ...spec, playerID: p.id } as any);
  });

  players.forEach((p) => {
    p.updateMatchID(matchId);
    p.start();
  });

  return players;
}

it('p1 consecutive wins with early betting and everyone else skips', () => {
  const initialState: IG = {
    players: [
      {
        id: '0',
        cardStyle: CardStyle.Style1,
        bet: null,
        betSkipped: false,
        hand: [CardType.Bunny],
        stack: [],
        revealedStack: [],
        wins: 0,
        isOut: false,
      },
      {
        id: '1',
        cardStyle: CardStyle.Style1,
        bet: null,
        betSkipped: false,
        hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
        stack: [],
        revealedStack: [],
        wins: 0,
        isOut: false,
      },
      {
        id: '2',
        cardStyle: CardStyle.Style1,
        bet: null,
        betSkipped: false,
        hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
        stack: [],
        revealedStack: [],
        wins: 0,
        isOut: false,
      },
    ],
    minBet: 1,
    maxBet: 0,
    currentBet: 0,
    bombPlayerId: null,
    failedRevealPlayerId: null,
    lastWinningPlayerId: null,
    discardPile: [],
  };

  const [p1, p2, p3] = setup(initialState);

  Utilities.PlaceBunnyCard(p1);
  Utilities.PlaceBombCard(p2);
  Utilities.PlaceBombCard(p3);

  Utilities.getTypedMoves(p1).Bet(2);
  Utilities.getTypedMoves(p2).SkipBet();
  Utilities.getTypedMoves(p3).SkipBet();

  Utilities.getTypedMoves(p1).Reveal(p1.playerID);
  Utilities.getTypedMoves(p1).Reveal(p3.playerID);
  Utilities.getTypedMoves(p3).Discard(p1.playerID, 0); // discard last card

  var { ctx } = Utilities.getTypedState(p1);

  expect(ctx.phase).toEqual(Phases.initial_placement);
  expect(ctx.currentPlayer).toEqual(p3.playerID); // bomb player starts

  Utilities.PlaceBombCard(p3); // can perform initial placement
});
