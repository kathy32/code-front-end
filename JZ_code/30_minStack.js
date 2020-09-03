// 题目30. 包含 min 函数的栈
// 思路：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/

class minStack {
  constructor () {
    this.A = []
    this.B = []
  }

  push (x) {
    this.A.push(x)
    if (x <= this.B[this.B.length-1] || this.B.length===0)  this.B.push(x)
  }

  pop () {
    let y = this.A.pop()
    if (y === this.B[this.B.length-1]) this.B.pop()
  }

  top () {
    return this.A[this.A.length-1]
  }

  min () {
    return this.B[this.B.length-1]
  }

  
}



// 测试
let mStack = new minStack

mStack.push(9)
mStack.push(10)
mStack.push(7)
mStack.push(3)

// mStack.pop()

// console.log(mStack.min()) // 7

mStack.push(5)

console.log(mStack.min()) // 3
console.log(mStack.top()) // 5








