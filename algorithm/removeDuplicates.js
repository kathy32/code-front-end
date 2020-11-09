// 删除 数组中重复项
// 双指针法
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xiang-by-/
var removeDuplicates = function (arr) {
  if (arr.length === 0) return

  // arr.sort((a, b) => a - b)
  // console.log(arr)

  let i = 0 // 慢指针：从 0 开始

  for (let j=1; j<arr.length; j++) {  // 快指针：j 从 1 开始
    if (arr[j] !== arr[i]) {
      i++ // 顺序很重要！i 变到 j 的位置，再做赋值
      arr[i] = arr[j] // 不重复值 被交换到了 前面
    }
  }
  // console.log(arr)

  // 返回移除后数组的新长度
  return i + 1

}


let arr = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(arr))




// 变：去除所有重复元素，只留下出现一次的元素
var removeDuplicates1 = function (arr) {
  let i = 0
  let res = []

  for (let j=1; j<arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  // 赋值
  for (let k=0; k<i+1; k++) {
    res.push(arr[k])
  }

  return res
}



let arr1 = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates1(arr1))