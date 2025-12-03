import {
  solve as solve1,
  getIdFromSequence as getIdFromSequence1,
  getInvalidIds as getInvalidIds1,
} from './day02_1';
// import { solve as solve2 } from './day02_2';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 02', () => {
  it('getIdFromSequence builds correct sequence from id', () => {
    expect(getIdFromSequence1(12345)).toBe(1234512345);
  });

  it('getInvalidIds returns correct ids', () => {
    expect(getInvalidIds1(11, 22)).toEqual([11, 22]);
    expect(getInvalidIds1(998, 1012)).toEqual([1010]);
    expect(getInvalidIds1(1188511880, 1188511890)).toEqual([1188511885]);
    expect(getInvalidIds1(222220, 222224)).toEqual([222222]);
    expect(getInvalidIds1(1698522, 1698528)).toEqual([]);
    expect(getInvalidIds1(446443, 446449)).toEqual([446446]);
    expect(getInvalidIds1(38593856, 38593862)).toEqual([38593859]);
  });

  it('should solve example for part 1', () => {
    expect(solve1(inputExample)).toBe(1227775554);
  });

  // it('should solve example for part 2', () => {
  //   expect(solve2(inputExample)).toBe(6);
  // });
});
