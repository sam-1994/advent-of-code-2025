import fs from 'node:fs';

export type Input = Array<{
  direction: string;
  value: number;
}>;

export function getInput(file: string): Input {
  return fs.readFileSync(file, 'utf-8')
    .trim()
    .split('\n')
    .map((line) => {
      const command = line.trim();
      const direction = command.charAt(0);
      const value = parseInt(command.slice(1), 10);
      return {
        direction,
        value,
      }
    });
}
