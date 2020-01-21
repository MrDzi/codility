import genomicRangeQuery from './genomicRangeQuery';

describe('genomic range', () => {
  it('should return correct result', () => {
    expect(genomicRangeQuery('CAGCCTA', [2,5,0], [4,5,6])).toEqual([2,4,1]);
    expect(genomicRangeQuery('AAGCTATCC', [1,6,2], [3,6,7])).toEqual([1,4,1]);
  });
});
