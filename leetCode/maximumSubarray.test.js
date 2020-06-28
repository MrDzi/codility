/***

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

***/

const maxSubArray = (A) => {
  const n = A.length;
  let maxSum = A[0];
  let localSum = A[0];

  for (let i = 1; i < n; i++) {
    if (A[i] > localSum + A[i]) {
      localSum = A[i];
    } else {
      localSum += A[i];
    }

    if (localSum > maxSum) {
      maxSum = localSum;
    }
  }

  return Math.max(maxSum, localSum);
};

describe("Maximum Subarray", () => {
  it("should return a subarray which has the largest sum", () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });

  it("should return a subarray which has the largest sum", () => {
    expect(maxSubArray([2,1,-1,-1,-1,-1,10,-1,20])).toBe(29);
  });
});
