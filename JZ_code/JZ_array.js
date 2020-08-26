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
// let arr = [2, 3, 1, 0, 2, 5, 3]
// getDupNum(arr)  // 2



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


// 题目11 旋转数组的最小数字
// 方法一：直接遍历找，无法达到面试要求 复杂度：n
var minArray1 = function (arr) {
  if (!arr || arr.length <=0) return

  return Math.min(...arr)
}

let arr = [3,4,5,1,2]
// console.log(minArray1(arr))  // 1


// 方法二：二分查找   复杂度：logn
var minArray2 = function (arr) {
  if (!arr || arr.length <= 0)  return 

  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)

  while (left < right) {
    // 情况一：子数组有序
    if (arr[left] < arr[right]) {
      return arr[left]
    }
    
    if (arr[left] < arr[mid]) { // 情况二：左子数组有序，最小值在右边
      left = mid + 1
    } else if (arr[mid] < arr[right]) {  // 情况三：右数组有序，最小值在左边
      right = mid
    } else {  // 情况四：无法判断，缩小范围
      ++left
    }
  }

  return arr[left]
} 

console.log(minArray2(arr))




