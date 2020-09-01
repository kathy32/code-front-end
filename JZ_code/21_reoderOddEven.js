// 题目21 调整数组顺序使奇数位于偶数前面
// 前奇 后偶

var reoderOddEven = function (arr) {
  if (arr.length === 0) return

  let pBegin = 0
  let pEnd = arr.length - 1

  while (pBegin < pEnd) {
    
    if (pBegin < pEnd && arr[pBegin] % 2 !== 0)  pBegin++ // 奇数，后移指针
    
    if (pBegin < pEnd && arr[pEnd] % 2 === 0)  pEnd-- // 偶数，前移指针

    // 前偶后奇，交换
    if (pBegin < pEnd && arr[pBegin] % 2 === 0 && arr[pEnd] % 2 !== 0) {
      let temp = arr[pBegin]
      arr[pBegin] = arr[pEnd]
      arr[pEnd] = temp
    }
    
  }

  return arr
}


let arr = [1, 2, 3, 4, 5]
console.log(reoderOddEven(arr))

