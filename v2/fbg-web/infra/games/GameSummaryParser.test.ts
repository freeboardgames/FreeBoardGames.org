import { parseGameSummary } from "./GameSummaryParser";

describe("GameSummaryParser", () => {
  it("parses summary correctly in portuguese", () => {
    const result = parseGameSummary(
      `
pt:
  code: jogo-da-velha
  name: Jogo da velha
  callout: Um jogo clássico
    `,
      "pt",
      "checkers"
    );
    expect(result).toEqual({
      callout: "Um jogo clássico",
      code: "jogo-da-velha",
      id: "checkers",
      name: "Jogo da velha",
    });
  });
});
