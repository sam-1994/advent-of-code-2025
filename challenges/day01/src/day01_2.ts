import { Input } from './get-input';

export function solve(input: Input): number {
  let position = 50;
  let solution = 0;

  for (const command of input) {
    const previousPosition = position;
    let value = command.value;
    solution += Math.floor(value / 100);
    value = value % 100;

    if (command.direction === 'L') {
      position -= value;
    } else if (command.direction === 'R') {
      position += value;
    }

    if(position >= 100) {
      solution++;
    } else if(previousPosition !== 0 && position <= 0) {
      solution++;
    }
    position = (position + 100) % 100; // Keep position within 0-99

  }

  return solution;
}
