import countDiv from './countDiv';

describe('count div', () => {
  it('should return correct result', () => {
    expect(countDiv(6,11,2)).toBe(3);
    expect(countDiv(2,10,3)).toBe(3);
    expect(countDiv(6,89,40)).toBe(2);
    expect(countDiv(1,1,11)).toBe(0);
    expect(countDiv(2,100001,5)).toBe(20000);
    expect(countDiv(11,11,2)).toBe(0);
    expect(countDiv(10,11,11)).toBe(1);
  });
});
