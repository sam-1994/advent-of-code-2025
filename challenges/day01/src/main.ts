import path from 'node:path';
import { solve as solve1 } from './day01_1';
import { readLinesOfFile } from '@scs-aoc-2025/file-utils';
// import { solve as solve2 } from './day01_2';


const input = readLinesOfFile(path.resolve(__dirname, '../../../src/assets/input.txt'));

console.log('First Result:', solve1(input));
// console.log('Second Result:', solve2(input));
