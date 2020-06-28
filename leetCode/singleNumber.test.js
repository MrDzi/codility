/***

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

***/

const singleNumber = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      delete map[arr[i]]
    } else {
      map[arr[i]] = true;
    }
  }

  return +Object.keys(map)[0];
};

describe("A SingleNumber test suite", () => {
  it("should find an element which occurs only once in the given array", () => {
    expect(singleNumber([2,2,1])).toBe(1);
    expect(singleNumber([4,1,2,1,2])).toBe(4);
  });
});
