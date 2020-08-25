// 1. 快速排序
let quickSort = function (arr) {
  if (arr.length <= 1) return arr 

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let right = []
  let left = []

  for (let i=0; i<arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))

}


// console.log(quickSort ([2,3,4,5,1]))


