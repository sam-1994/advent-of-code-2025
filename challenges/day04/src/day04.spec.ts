import {
  solve as solve1,
} from './day04_1';
// import {
//   solve as solve2,
// } from './day03_2';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 04', () => {
  describe('part 1', () => {
    it('solves the example', () => {
      expect(solve1(inputExample)).toBe(13);
    });
  });

  // describe('part 2', () => {
  // })
});
