import setCounters from './maxCounters';

describe('max counters', () => {
  it('should return correct counters', () => {
    expect(setCounters(5, [1,2,3,4,5,6])).toEqual([1,1,1,1,1]);
    expect(setCounters(5, [3,4,4,6,1,4,4])).toEqual([3,2,2,4,2]);
    expect(setCounters(3, [1,2,2,2])).toEqual([1,3,0]);
    expect(setCounters(7, [1,2,2,2,8,4,5,2,3,3])).toEqual([3,4,5,4,4,3,3]);
  });
});
