// 剑指 面试题3 数组中重复的数字
// 思路：比较值与下表是否对应，不对应则交换，交换后发现相同数字，则重复
function getDupNum (arr) {
  let dupNum = 0

  if (arr.length === 0) return false

  for (let i=0; i<arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length-1) {
      return false
    }

    if (arr[i] !== i) {
      if (arr[i] === arr[arr[i]]) {   // 如 [0, 1, 2, 3, 2, 5] 中的 arr[4]
        dupNum = arr[i]
        console.log(dupNum)
        return true
      }

      let temp = arr[i]
      arr[i] = arr[temp]
      arr[temp] = temp
    }
  }

  return false

}


// 测试
let arr = [2, 3, 1, 0, 2, 5, 3]
getDupNum(arr)  // 2



// 变：不修改数组，找出重复的数字。【可以不看】
// 思路：二分查找
function getDuplication (arr) {
  if (arr.length === 0) return false
  
  let start = 0
  let end = arr.length - 1

  while (end >= start) {
    let minddle = (end - start) / 2 + start
    let count = countRange(arr, start, end)

    if (end === start) {
      if (count > 1) return start
      else break
    } 

    if (count > minddle - start + 1) end = minddle
    else start = minddle + 1
  }

  return -1
}


function countRange (arr, start, end) {
  if (arr.length === 0) {
    return 0
  }

  let count = 0
  for (let i=0; i<arr.length; i++) {
    if (arr[i] >=start && arr[i] <= end) {
      count++
    }
  }

  return count
}


// 题目4 二维数组的查找
// 思路：该数字大于要查找的数字，则剔除这个数字所在的列； 小于 -> 行
function findNum (matrix, rows, cols, num) {
  let found = false

  if (matrix !== null && rows > 0 && cols > 0) {
    let row = 0
    let col = cols - 1

    while (row < rows && col >= 0) {
      if (matrix[row*cols+col] === num) {
        found = true
        break
      } else if (matrix[row*cols+col > num]) {
        --col
      } else {
        ++row
      }
    }
  }

  return found
}