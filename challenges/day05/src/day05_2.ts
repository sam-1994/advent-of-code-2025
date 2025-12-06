import { Input } from './get-input';

export function solve(input: Input): number {
  const sortedRanges = input.ranges.sort(
    (a, b) => {
    if(a.start !== b.start) {
      return a.start - b.start;
    }
    return a.end - b.end;
  }
  );

  const mergedRanges: { start: number; end: number }[] = [];
  for (const range of sortedRanges) {
    if (
      mergedRanges.length === 0 ||
      mergedRanges[mergedRanges.length - 1].end < range.start
    ) {
      mergedRanges.push(range);
    } else {
      mergedRanges[mergedRanges.length - 1].end = Math.max(
        mergedRanges[mergedRanges.length - 1].end,
        range.end
      );
    }
  }

  return mergedRanges.reduce((sum, range) => sum + (range.end - range.start + 1), 0);
}
