import { solve as solve1 } from './day01_1';
import { readLinesOfFile } from '@scs-aoc-2025/file-utils';

const inputExample = readLinesOfFile(`${__dirname}/assets/example.txt`);

describe('Day 01 Part 1', () => {
  it('should solve example for part 1', () => {
    expect(solve1(inputExample)).toBe(3);
  });
});
