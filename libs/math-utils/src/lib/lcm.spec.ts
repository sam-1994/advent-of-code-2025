import { lcm  } from './lcm';

describe('lcm', () => {
  it('computes the LCM of two positive numbers', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(10, 15)).toBe(30);
  });

  it('lcm(a, 0) returns 0', () => {
    expect(lcm(7, 0)).toBe(0);
    expect(lcm(0, 7)).toBe(0);
  });

  it('works with negative numbers', () => {
    expect(lcm(-4, 6)).toBe(12);
    expect(lcm(4, -6)).toBe(12);
    expect(lcm(-4, -6)).toBe(12);
  });
});

