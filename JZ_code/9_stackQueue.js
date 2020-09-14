// 题目9 用两个栈实现队列
// 思路：inStack 进栈，outStack 出栈
function stackQueue () {
  this.inStack = []
  this.outStack = []
}

stackQueue.prototype.appendTail = function (value) {
    this.inStack.push(value)
}

stackQueue.prototype.deleteHead = function () {
  const {inStack, outStack} = this

  if (outStack.length) {
    return outStack.pop()
  } else {
    while (inStack.length) {
      outStack.push(inStack.pop())
    }
    return outStack.pop() || -1
  }
}