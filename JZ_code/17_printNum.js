// 打印从 1 到最大的 n 位数

var printNum = function (n) {
  return Array.from({length: 10**n-1}, (item, index) => index + 1)  // 重点
}

console.log(printNum(2))