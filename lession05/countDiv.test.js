import countDiv from './countDiv';

describe('count div', () => {
  it('should return correct result', () => {
    expect(countDiv(6,11,2)).toBe(3);
    expect(countDiv(2,10,3)).toBe(3);
    expect(countDiv(6,89,40)).toBe(2);
  });
});
