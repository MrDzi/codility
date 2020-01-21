import findMissingInteger from './missingInteger';

describe('missing integer', () => {
  it('should find missing integer', () => {
    expect(findMissingInteger([-2,2,1,4,5,2])).toBe(3);
    expect(findMissingInteger([-2,-6])).toBe(1);
    expect(findMissingInteger([348,2780])).toBe(1);
    expect(findMissingInteger([1,2,3,4,5])).toBe(6);
  });
});
