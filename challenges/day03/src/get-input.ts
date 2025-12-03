import * as fs from 'node:fs';

export type Input = Array<string>;

export function getInput(file: string): Input {
  return fs.readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map(line => line.trim());
}
