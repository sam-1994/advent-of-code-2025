export function solve(commands: string[]): number {
  let position = 50;
  let solution = 0;

  for (const command of commands) {
    const previousPosition = position;
    const direction = command.charAt(0);
    let value = parseInt(command.slice(1), 10);
    solution += Math.floor(value / 100);
    value = value % 100;

    if (direction === 'L') {
      position -= value;
    } else if (direction === 'R') {
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
