import {
  solve as solve1,
} from './day05_1';
import {
  solve as solve2,
} from './day05_2';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 05', () => {
  describe('part 1', () => {
    it('solves the example', () => {
      expect(solve1(inputExample)).toBe(3);
    });
  });

  describe('part 2', () => {
    it('solves the example', () => {
      expect(solve2(inputExample)).toBe(14);
    });
  })
});
