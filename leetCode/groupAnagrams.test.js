/***

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

***/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const result = [];
  const map = {};
  const sorted = strs.map(s => s.split("").sort().join(""));

  sorted.forEach((s, i) => {
    if (!map[s]) {
      map[s] = [];
    }
    map[s].push(i);
  })

  Object.keys(map).forEach(p => {
    result.push(map[p].map(i => strs[i]));
  });

  return result;
};

describe("Group Anagrams", () => {
  it("should return grouped anagrams 1", () => {
    const grouped = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(grouped).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(["ate","eat","tea"]),
        expect.arrayContaining(["nat","tan"]),
        expect.arrayContaining(["bat"])
      ])
    );
  });
});
