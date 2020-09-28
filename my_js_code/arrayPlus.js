var s = [1,2,3]

function test (arr) {
  let sum = 0

  for (let i=0; i<arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

s.push(4)
console.log(test([...s])) // 10

// 总结：扩展运算符在参数数组 push 之后，会影响函数的结果。数组响应式