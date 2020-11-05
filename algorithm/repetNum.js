// 找出数组中重复次数＞n的值并输出

var repNum = function (arr, n) {
  let count = 1
  let res = []

  arr = arr.sort((a, b) => a - b)
  // console.log(arr)

  for (let i in arr) {
    if (arr[i] === arr[i-1]) {
      res.push(arr[i])
      count++
      while (count>n) {
        return arr[i]
      }
    }
  }
  

}

let arr = [1,2,3,4,2,1,4,1,3]
console.log(repNum(arr, 2)) // 1