import * as fs from 'node:fs';

export type Input = {
  ranges: Array<{
    start: number;
    end: number;
  }>;
  ids: number[];
};

export function getInput(file: string): Input {
   const splitFile = fs.readFileSync(file, 'utf-8')
    .trim()
    .split('\n\n');

  const ranges = splitFile[0].trim().split('\n').map(
    (line) => {
      const [start, end] = line.split('-').map(Number);
      return { start, end };
    }
  );
  const ids = splitFile[1].trim().split('\n').map(Number);

  return { ranges, ids };
}
