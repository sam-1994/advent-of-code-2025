import fs from 'node:fs';

export function readLinesOfFile(
  file: string,
): string[] {
  return fs.readFileSync(file, 'utf-8').split('\n');
}
