/***

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

***/

const moveZeroes = (nums) => {
  const arr = [...nums];
  let numOfZeroes = 0;

  const swapZeroes = (arr, i) => {
    if (arr[i] === 0) {
      numOfZeroes += 1;
      arr.push(...arr.splice(i, 1));
      if (numOfZeroes < arr.length - i + 1) {
        swapZeroes(arr, i);
      }
    }
  };

  for (let i = 0; i < arr.length; i++) {
    swapZeroes(arr, i);
  }

  return arr;
}

describe("Move Zeroes", () => {
  it("should move zeroes to the end of an array 1", () => {
    expect(moveZeroes([3,0,2,4,0,5])).toEqual([3,2,4,5,0,0]);
  });

  it("should move zeroes to the end of an array 2", () => {
    expect(moveZeroes([0,0,2,0,0,5])).toEqual([2,5,0,0,0,0]);
  });

  it("should move zeroes to the end of an array 3", () => {
    expect(moveZeroes([0,0,0])).toEqual([0,0,0]);
  });
});
