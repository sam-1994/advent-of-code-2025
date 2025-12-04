import { Input } from './get-input';

export function solve(input: Input): number {
  let reachableRolls = 0;
  for(let y=0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (input[y][x]) {
        let adjacentRolls = 0;
        const adjacentYStart = Math.max(0, y - 1);
        const adjacentYEnd = Math.min(input.length - 1, y + 1);
        const adjacentXStart = Math.max(0, x - 1);
        const adjacentXEnd = Math.min(input[y].length - 1, x + 1);
        for(let adjacentY = adjacentYStart; adjacentY <= adjacentYEnd; adjacentY++) {
          for (let adjacentX = adjacentXStart; adjacentX <= adjacentXEnd; adjacentX++) {
            if (adjacentY === y && adjacentX === x) {
              continue;
            }
            if (input[adjacentY][adjacentX]) {
              adjacentRolls++;
            }
          }
        }
        if(adjacentRolls < 4) {
          reachableRolls++;
        }
      }
    }
  }
  return reachableRolls;
}
