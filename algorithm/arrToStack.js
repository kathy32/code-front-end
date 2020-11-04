// 数组实现栈
function Stack () {
  let stack = []

  this.push = function (item) {
    stack.push(item)
  }

  this.delete = function () {
    stack.pop()
  }

  this.peek = function () {
    return stack[stack.length-1]
  }

  this.isEmpty = function () {
    if (stack.length===0) return true
    else return false 
  }
}


// 数组实现队列
// 提示：arr.shift() 即是出队列