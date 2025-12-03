import {
  getIdFromSequence as getIdFromSequence1,
  getInvalidIds as getInvalidIds1,
  solve as solve1,
} from './day02_1';
import {
  checkIfIdIsInvalid as checkIfIdIsInvalid2,
  getInvalidIds as getInvalidIds2,
  solve as solve2,
} from './day02_2';
import { getInput } from './get-input';

const inputExample = getInput(`${__dirname}/assets/example.txt`);

describe('Day 02', () => {
  describe('part 1', () => {
    it('getIdFromSequence builds correct sequence from id', () => {
      expect(getIdFromSequence1(12345)).toBe(1234512345);
    });

    it('getInvalidIds returns correct ids', () => {
      expect(getInvalidIds1(11, 22)).toEqual([11, 22]);
      expect(getInvalidIds1(95, 115)).toEqual([99]);
      expect(getInvalidIds1(998, 1012)).toEqual([1010]);
      expect(getInvalidIds1(1188511880, 1188511890)).toEqual([1188511885]);
      expect(getInvalidIds1(222220, 222224)).toEqual([222222]);
      expect(getInvalidIds1(1698522, 1698528)).toEqual([]);
      expect(getInvalidIds1(446443, 446449)).toEqual([446446]);
      expect(getInvalidIds1(38593856, 38593862)).toEqual([38593859]);
      expect(getInvalidIds1(565653, 565659)).toEqual([]);
      expect(getInvalidIds1(824824821, 824824827)).toEqual([]);
      expect(getInvalidIds1(2121212118, 2121212124)).toEqual([]);
    });

    it('should solve example for part 1', () => {
      expect(solve1(inputExample)).toBe(1227775554);
    });
  });

  describe('part 2', () => {
    it('checks if an id is valid', () => {
      expect(checkIfIdIsInvalid2('1')).toBe(false);
      expect(checkIfIdIsInvalid2('22')).toBe(true);
      expect(checkIfIdIsInvalid2('1234')).toBe(false);
      expect(checkIfIdIsInvalid2('11211')).toBe(false);
      expect(checkIfIdIsInvalid2('112112')).toBe(true);
      expect(checkIfIdIsInvalid2('111111')).toBe(true);
      expect(checkIfIdIsInvalid2('123123123')).toBe(true);
      expect(checkIfIdIsInvalid2('121212121212')).toBe(true);
    })
    it('getInvalidIds returns correct ids', () => {
      expect(getInvalidIds2(11, 22)).toEqual([11, 22]);
      expect(getInvalidIds2(95, 115)).toEqual([99, 111]);
      expect(getInvalidIds2(998, 1012)).toEqual([999, 1010]);
      expect(getInvalidIds2(1188511880, 1188511890)).toEqual([1188511885]);
      expect(getInvalidIds2(222220, 222224)).toEqual([222222]);
      expect(getInvalidIds2(1698522, 1698528)).toEqual([]);
      expect(getInvalidIds2(446443, 446449)).toEqual([446446]);
      expect(getInvalidIds2(38593856, 38593862)).toEqual([38593859]);
      expect(getInvalidIds2(565653, 565659)).toEqual([565656]);
      expect(getInvalidIds2(824824821, 824824827)).toEqual([824824824]);
      expect(getInvalidIds2(2121212118, 2121212124)).toEqual([2121212121]);
    });

    it('should solve example for part 1', () => {
      expect(solve2(inputExample)).toBe(4174379265);
    });
  })
});
