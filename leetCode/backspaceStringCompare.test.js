/***

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

***/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
    const transform = (string) => {
      const arr = [...string];
      const n = arr.length
      const newArr = [];
      let hashCount = 0;

      for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === "#") {
          hashCount++;
        } else {
          if (hashCount) {
            hashCount--;
          } else {
            newArr.unshift(arr[i]);
          }
        }
      }

      return newArr.join("");
    };

    return transform(S) === transform(T);
};

describe("Backspace string compare", () => {
  it("case 1", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  });
  it("case 2", () => {
    expect(backspaceCompare("ab##c", "ad#c")).toBe(false);
  });
  it("case 1", () => {
    expect(backspaceCompare("abc#c", "ad#c")).toBe(false);
  });
  it("case 1", () => {
    expect(backspaceCompare("abcdefgh####h", "abcde#h")).toBe(true);
  });
});
