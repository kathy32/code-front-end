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


// 应用 - 腾讯云一面（按照年龄排序）
let par = [{age:23, name: 'yico'}, 
            {age: 7, name: 'neymar'}, 
            {age: 18, name: 'kathy'}]


var sortAge = function (par) {
  if (par.length <= 1) return par 

  let pivotIndex = Math.floor(par.length / 2)
  let pivot = par.splice(pivotIndex, 1)[0].age
  let tempPivot = par.splice(pivotIndex, 1)[0]
  let right = []
  let left = []

  for (let i=0; i<par.length; i++) {
    if (pivot > par[i].age) {
      left.push(par[i])
      
    } else {
      right.push(par[i])
    }
  }

  return sortAge(left).concat(tempPivot, sortAge(right))

}

console.log(sortAge(par))


