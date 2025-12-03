import { Input } from './get-input';

export function solve(input: Input): number {
  return input.reduce((totalJoltage, bank) => {
    return totalJoltage + getJoltage(bank);
  }, 0);
}

export function getJoltage(bank: string): number {
  let firstBattery = -1;
  let secondBattery = -1;

  for (let i = 9; firstBattery < 0 && i >= 0; i--) {
    const index = bank.indexOf(i.toString());
    if (0 <= index && index < bank.length - 1) {
      firstBattery = i;
    }
  }

  const remainingBank = bank.substring(
    bank.indexOf(firstBattery.toString()) + 1
  );
  for (let i = 9; secondBattery < 0 && i >= 0; i--) {
    const index = remainingBank.indexOf(i.toString());
    if (0 <= index) {
      secondBattery = i;
    }
  }

  return 10 * firstBattery + secondBattery;
}
