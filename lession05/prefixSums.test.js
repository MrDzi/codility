import prefixSums from './prefixSums';

describe('prefix sums', () => {
  it('should return correct number of pairs', () => {
    expect(prefixSums([0,1,0,1,1])).toBe(5);
    expect(prefixSums([0,0,1,1,0,1,1,0,1])).toBe(14);
    expect(prefixSums([0,0,0,0,1])).toBe(4);
    expect(prefixSums([1,1,1,1])).toBe(0);
    expect(prefixSums([0,0,0,0])).toBe(0);
    expect(prefixSums([1,1,1,1,0])).toBe(0);
    expect(prefixSums([0,0,0,1,0,1,1,1,1,0])).toBe(19);
  });
});
