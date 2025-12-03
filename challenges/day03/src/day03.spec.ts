import {
  getJoltage as getJoltage1,
  solve as solve1,
} from './day03_1';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 02', () => {
  describe('part 1', () => {
    it('getJoltage calculates correctly', () => {
      expect(getJoltage1('987654321111111')).toBe(98);
      expect(getJoltage1('811111111111119')).toBe(89);
      expect(getJoltage1('234234234234278')).toBe(78);
      expect(getJoltage1('818181911112111')).toBe(92);
    });

    it('solves the example', () => {
      expect(solve1(inputExample)).toBe(357);
    });
  });
});
