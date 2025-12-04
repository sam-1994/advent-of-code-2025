import * as fs from 'node:fs';

export type Input = Array<Array<boolean>>;

export function getInput(file: string): Input {
  return fs.readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map(
      line => line
        .trim()
        .split('')
        .map(char => char === '@')
    );
}
