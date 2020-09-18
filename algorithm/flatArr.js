var flatArr = function (arr) {
  arr = arr.flat(3)  // 扁平化, 参数表示有几层

  arr = Array.from(new Set(arr))  // 去重

  arr = arr.sort((a, b) => a - b) // 升序

  return arr
}

let arr = [[2,3,4], [5,12,5], [2,[1,23,5]]]

console.log(flatArr(arr))