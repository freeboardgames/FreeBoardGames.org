import { GameMode, parseGameDetails } from "./GameDetailsParser";

describe("GameDetailsParser", () => {
  it("parses details correctly in portuguese", () => {
    const result = parseGameDetails(
      `
modes:
  - OnlineFriend
contributors:
  - jasonharrison
pt: 
  instructions:
    text: foo
    `,
      "pt",
      "checkers"
    );
    expect(result).toEqual({
      contributors: ["jasonharrison"],
      instructions: {
        text: "foo",
      },
      modes: [GameMode.OnlineFriend],
    });
  });
});
