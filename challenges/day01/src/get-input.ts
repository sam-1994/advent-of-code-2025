import { readLinesOfFile } from '@scs-aoc-2025/file-utils';

export function getInput(file: string): string[] {
  return readLinesOfFile(file).filter((line) => line.length > 0);
}
