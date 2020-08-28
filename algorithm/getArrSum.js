// 描述：输入：一个数组，一个值
// 输出：相加得该值得各种情况下标

var getArrSum = function (arr, x, idx, stack) {
  let res = []

  if (x === 0) { 
    res.push(stack)
    console.log(res.toString().split(',').map(num => Number(num)))  // 数据扁平化
  }

  
  // 重难点
  for (let i=idx; i<arr.length; i++) {
    stack.push(i)

    getArrSum(arr, x-arr[i], i+1, stack)  // 递归
    
    stack.pop() // 回溯
  }
  
}


let arr = [1, 2, 3, 4, 5]
let x = 6
let idx = 0
let stack = []

getArrSum(arr, x, idx, stack)
