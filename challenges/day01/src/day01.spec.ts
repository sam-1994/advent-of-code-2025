import { solve as solve1 } from './day01_1';
import { solve as solve2 } from './day01_2';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 01', () => {
  it('should solve example for part 1', () => {
    expect(solve1(inputExample)).toBe(3);
  });

  it('should solve example for part 2', () => {
    expect(solve2(inputExample)).toBe(6);
  });
});
