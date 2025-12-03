import { Input } from './get-input';

export function solve(input: Input): number {
  return input.reduce((totalInvalidIds, { firstId, lastId }) => {
    return totalInvalidIds + getInvalidIds(firstId, lastId).reduce(
      (sum, id) => sum + id,
      0
    );
  }, 0);
}

export function getInvalidIds(start: number, end: number): number[] {
  const invalidIds = [];

  let startString = start.toString();
  if(startString.length % 2 !== 0) {
    start = Math.pow(10, Math.ceil(Math.log10(start)));
    startString = start.toString();
  }

  startString = startString.substring(0, startString.length / 2);
  let sequence = Number(startString);
  let id = getIdFromSequence(sequence);

  if(id < start) {
    sequence++;
    id = getIdFromSequence(sequence);
  }

  while(id <= end) {
    invalidIds.push(id);
    sequence++;
    id = getIdFromSequence(sequence);
  }

  return invalidIds;
}

export function getIdFromSequence(sequence: number): number {
  return Number(sequence.toString() + sequence.toString());
}
