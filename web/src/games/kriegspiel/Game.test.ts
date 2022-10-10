import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import * as Game from './Game';

it('multiplayer and movement test', () => {
  const spec = {
    game: Game.Kriegspiel,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' });
  const p1 = Client({ ...spec, playerID: '1' });

  p0.start();
  p1.start();

  p0.moves.movePiece(157, 133);

  p0.moves.movePiece(152, 104);

  p0.moves.movePiece(129, 103);

  p0.moves.movePiece(180, 231);

  p0.moves.movePiece(178, 180);

  p0.events.endTurn();

  p1.moves.movePiece(264, 239);

  p1.moves.movePiece(265, 240);

  p1.moves.movePiece(266, 241);

  p1.moves.movePiece(289, 263);

  p1.moves.movePiece(268, 216);

  p1.events.endTurn();

  p0.moves.movePiece(177, 152);

  p0.moves.movePiece(133, 107);

  p0.moves.movePiece(103, 154);

  p0.moves.movePiece(134, 133);

  p0.moves.movePiece(77, 76);

  p0.events.endTurn();

  const gameData =
    '|32|🏰|6|🎪.0|19|⛰️|⛰️|⛰️|⛰️|13|🚩.0|5|🎪.0|1|⛰️|19|🏇.0|2|🎉.0|1|⛰️|23|💂.0|🛣️|17|🏇.0|🏇.0|🚚.0|💂.0|💂.0|1|💂.0|⛰️|19|💂.0|🏇.0|💂.0|💂.0|💂.0|⛰️|10|🏰|9|💂.0|3|⛰️|2|🏰|3|🏇.1|14|🚀.0|7|💂.1|💂.1|💂.1|21|💂.1|3|🎉.1|21|🏰|💂.1|💂.1|🏇.1|🏇.1|8|🏰|11|💂.1|💂.1|💂.1|🏇.1|17|⛰️|⛰️|⛰️|⛰️|⛰️|⛰️|🚚.1|23|🚀.1/🛣️.1|6|🚩.1/🏰|17|⛰️|24|⛰️|24|⛰️|36|🎪.1|19|🎪.1|';
  expect(p1.getState().G.cells).toEqual(Game.loadPieces(gameData));
  expect(p0.getState().G.cells).toEqual(Game.loadPieces(gameData));
});

it('attack scenario', () => {
  const atkScenarioData =
    '|32|🏰|6|🎪.0|19|⛰️|⛰️|⛰️|⛰️|19|🎪.0|1|⛰️|24|⛰️|24|🛣️|24|⛰️|4|💂.0|🏇.1|🏇.1|17|⛰️|10|🏰|13|⛰️|2|🏰|24|💂.1|🏇.0|50|🏰|12|🏰|32|⛰️|⛰️|⛰️|⛰️|⛰️|⛰️|24|🛣️|6|🏰|17|⛰️|24|⛰️|24|⛰️|36|🎪.1|19|🎪.1|';
  const atkScenario = {
    ...Game.Kriegspiel,
    setup: () => Game.loadGame(atkScenarioData, '0'),
  };
  const client = Client({ game: atkScenario });

  //attack and retreat test
  client.moves.attack(237);

  client.events.endTurn();

  client.moves.movePiece(237, 211);

  const piece1 = client.getState().G.cells[211];
  expect(piece1.typeName).toEqual('Infantry');
  expect(piece1.retreating).toEqual(true);
  //attack and eliminate
  client.moves.attack(164);
  expect(client.getState().G.cells[164]).toEqual(null);
});
