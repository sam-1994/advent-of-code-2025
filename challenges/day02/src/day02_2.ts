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

  for(let id = start; id <= end; id++) {
    if(checkIfIdIsInvalid(id.toString())) {
      invalidIds.push(id);
    }
  }
  return invalidIds;
}

export function checkIfIdIsInvalid(idString: string): boolean {
  for(let i = 1; i <= Math.floor(idString.length / 2); i++) {
    if(idString.length % i !== 0) {
      continue;
    }

    const sequence = idString.substring(0, i);
    let number = '';
    for(let j = 0; j < idString.length / i; j++) {
      number += sequence;
    }

    if(number === idString) {
      return true;
    }
  }

  return false;
}
