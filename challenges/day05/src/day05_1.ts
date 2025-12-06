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

  const sortedIds = input.ids.sort((a, b) => a - b);

  let currentRangeIndex = 0;

  let freshIds = 0;

  for (let i = 0; i < sortedIds.length; i++) {
    const id = sortedIds[i];
    while(currentRangeIndex < mergedRanges.length && mergedRanges[currentRangeIndex].end < id) {
      currentRangeIndex++;
    }
    if(currentRangeIndex === mergedRanges.length) {
      break;
    }
    if(mergedRanges[currentRangeIndex].start <= id) {
      freshIds++;
    }
  }

  return freshIds;
}
