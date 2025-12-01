import { gcd } from './gcd';

export function lcm(a: number, b: number): number  {
  return Math.abs(a * b) / gcd(a, b);
}
