// 题目15 二进制中1的个数
var getNumberOf1 = function (num) {
  let count = 0

  while (num) {
    ++count
    num = (num - 1) & num
  }

  return count
}

console.log(getNumberOf1(9))  // 1001 -> 2