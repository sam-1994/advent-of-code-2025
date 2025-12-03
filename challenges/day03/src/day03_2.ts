import { Input } from './get-input';

export function solve(input: Input): number {
  return input.reduce((totalJoltage, bank) => {
    return totalJoltage + getJoltage(bank);
  }, 0);
}

export function getJoltage(bank: string): number {
  const batteries: number[] = [];
  let remainingBank = bank;

  for (let i = 0; i < 12; i++) {
    let currentBattery = -1;
    for (let j = 9; currentBattery < 0 && j >= 0; j--) {
      const index = remainingBank.indexOf(j.toString());
      if (0 <= index && index <= remainingBank.length - (12 - i)) {
        currentBattery = j;
      }
    }
    batteries.push(currentBattery);
    remainingBank = remainingBank.substring(
      remainingBank.indexOf(currentBattery.toString()) + 1
    );
  }

  return batteries.reduce(
    (totalJoltage, battery) => 10 * totalJoltage + battery,
    0
  );
}
