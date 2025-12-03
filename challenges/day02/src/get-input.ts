import * as fs from 'node:fs';

export type Input = Array<{
  firstId: number;
  lastId: number;
}>
export function getInput(file: string): Input {
  return fs.readFileSync(file, 'utf-8')
    .trim()
    .split(',')
    .map(inputPart => {
      const splitInputPart = inputPart.split('-');
      return {
        firstId: Number(splitInputPart[0]),
        lastId: Number(splitInputPart[1]),
      };
    });
}
