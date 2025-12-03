import path from 'node:path';
import { solve as solve1 } from './day03_1';
// import { solve as solve2 } from './day03_2';
import { getInput } from './get-input';


const input = getInput(path.resolve(__dirname, '../../../src/assets/input.txt'));

console.log('First Result:', solve1(input));
// console.log('Second Result:', solve2(input));
