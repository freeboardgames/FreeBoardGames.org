import { GAMES_LIST } from './games';

describe('Games definitions', () => {
  for (const gameDef of GAMES_LIST) {
    it(`${gameDef.code} should have basic info`, () => {
      expect(gameDef.code.length).toBeGreaterThan(0);
      expect(gameDef.name.length).toBeGreaterThan(0);
      expect(gameDef.minPlayers).toBeGreaterThan(0);
      expect(gameDef.maxPlayers).toBeGreaterThanOrEqual(gameDef.minPlayers);
      expect(gameDef.description.length).toBeGreaterThan(0);
      expect(gameDef.descriptionTag.length).toBeGreaterThan(0);
      expect(gameDef.instructions.videoId.length).toBeGreaterThan(0);
      expect(gameDef.instructions.text.length).toBeGreaterThan(0);
    });
  }
});
