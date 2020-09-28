// 题目50 第一次出现一次的字符
// 描述：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

// 思路：hashMap

var firstUniqChar = function (s) {
  const map = new Map()

  for (let i=0; i<s.length; i++) {
    map.set(s[i], (map.get(s[i])||0) + 1)
  }

  // 遍历键、值（重难点）
  // 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  for (const[k, v] of [...map.entries()]) {
    if (v === 1)  return k
  }

  return ' '
}