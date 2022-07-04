import {
  GameTranslationStatus,
  parseGameTranslations,
} from "./GameTranslationsParser";

describe("GameTranslationsParser", () => {
  it("parses translations correctly", () => {
    const result = parseGameTranslations(
      `
translations:
  pt: DONE
  de: DONE
    `,
      "pt"
    );
    expect(result).toEqual({
      pt: GameTranslationStatus.DONE,
      de: GameTranslationStatus.DONE,
    });
  });
});
