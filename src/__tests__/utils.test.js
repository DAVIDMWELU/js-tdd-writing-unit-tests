// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("throws an error if input is not a string", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
  });
});
