import { gcd  } from './gcd';


describe('gcd', () => {
  it('computes the GCD of two positive numbers', () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(21, 14)).toBe(7);
    expect(gcd(100, 10)).toBe(10);
  });

  it('gcd(a, 0) returns a', () => {
    expect(gcd(7, 0)).toBe(7);
    expect(gcd(0, 0)).toBe(0); // depending on desired behavior
  });

  it('works with reversed argument order', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  it('works with negative numbers', () => {
    expect(gcd(-12, 8)).toBe(4);
    expect(gcd(12, -8)).toBe(4);
    expect(gcd(-12, -8)).toBe(4);
  });
});
