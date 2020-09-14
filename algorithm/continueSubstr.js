// 连续子串：排序 -> 去重 -> 找连续子串
var sortArr = function (arr) {
  arr = arr.sort((a, b) => a-b)
  let res = []

  for (let i=0; i<arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) { //  去重
      res.push(arr[i])
    }
  }

  let resule = ''
  resule += res[0]


  for (let i=1; i<res.length; i++) {
    if (res[i] === res[i-1] + 1) {
      resule += ',' + res[i]
    } else {
      resule += '\n'
      resule += res[i]

    }
  }


  return resule
}


let arr = [2, 2, 10, 3, 5, 7, 4, 11, 10, 11, 20, 6]

console.log(sortArr(arr))