export function solve(commands: string[]): number {
  let position = 50;
  let solution = 0;

  for (const command of commands) {
    const direction = command.charAt(0);
    const value = parseInt(command.slice(1), 10);
    if (direction === 'L') {
      position -= value;
    } else if (direction === 'R') {
      position += value;
    }
    position = ((position % 100) + 100) % 100; // Keep position within 0-99

    if(position === 0) {
      solution++;
    }
  }

  return solution;
}
