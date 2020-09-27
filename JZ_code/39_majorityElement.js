// 题目39 数组中出现次数超过一半的数字

// 排序法：众数超过一半，则排序，取中间的数字

var majorityElement = function (arr) {
  arr = arr.sort((a, b) => a - b)

  let len = arr.length
  let res = arr[Math.floor(len / 2)]

  return res
}

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]

console.log(majorityElement(arr))
