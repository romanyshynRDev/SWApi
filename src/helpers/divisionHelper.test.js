import { sum } from './yourFile';

describe('sum function', () => {
  it('should correctly divide two numbers', () => {
    expect(sum(6, 2)).toBe(3);
    expect(sum(10, 5)).toBe(2);
  });

  it('should handle division by zero', () => {
    expect(sum(10, 0)).toBe(Infinity);
  });

  it('should handle negative numbers', () => {
    expect(sum(-10, 2)).toBe(-5);
  });
});