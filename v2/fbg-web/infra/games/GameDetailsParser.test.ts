import { parseGameDetails } from "./GameDetailsParser";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";

describe("GameDetailsParser", () => {
  it("parses details correctly in portuguese", () => {
    const result = parseGameDetails(
      `
modes:
  - OnlineFriend
contributors:
  - jasonharrison
players: 2
pt: 
  descriptionTag: Foo
  instructions:
    text: foo
    `,
      "pt",
      "checkers"
    );
    expect(result).toEqual({
      descriptionTag: "Foo",
      contributors: ["jasonharrison"],
      instructions: {
        text: "foo",
        videoId: undefined,
      },
      modes: [GameMode.OnlineFriend],
      playerCount: {
        max: 2,
        min: 2,
      },
    });
  });
});
