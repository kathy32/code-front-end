// 面试题31. 栈的压入、弹出序列
// 思路：https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/solution/mian-shi-ti-31-zhan-de-ya-ru-dan-chu-xu-lie-mo-n-2/

var validStack = function (pushed, poped) {
  var stack = []
  var i = 0

  for (let num=1; num<=pushed.length; num++) {
    stack.push(num)

    while (stack.length>0 && stack[stack.length-1]===poped[i]) {
      stack.pop()
      i++
    }
  }
  return stack
}



let pushed = [1, 2, 3, 4, 5]
let poped = [4, 3, 5, 1, 2]

console.log(validStack(pushed, poped))  // 为空数组，则满足，否则不满足
