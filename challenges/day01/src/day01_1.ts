import { Input } from './get-input';

export function solve(input: Input): number {
  let position = 50;
  let solution = 0;

  for (const command of input) {
    const value = command.value;
    if (command.direction === 'L') {
      position -= value;
    } else if (command.direction === 'R') {
      position += value;
    }
    position = ((position % 100) + 100) % 100; // Keep position within 0-99

    if(position === 0) {
      solution++;
    }
  }

  return solution;
}
