// 394 leetcode
// 遍历字符串，遇数和字母累加。遇[，数、字母入栈并清空。遇]，出栈并拼接
// https://leetcode-cn.com/problems/decode-string/solution/zheng-ze-zhan-di-gui-1xing-dai-ma-3jie-fa-chao-99-/
var decodeString = function (s) {
  let stack = []
  let res = ''
  let multi = 0

  s = s.split('')
  // console.log(s)

  for (let c of s) {
    if (c === '[') {
      stack.push([res,multi])
      res = ''
      multi = 0
    }
    else if (c === ']') {
      let [last_res,cur_multi] = stack.pop()
      res = last_res + res.repeat(cur_multi)  // 重点
    }
    else if (/\d/.test(c)) {
      multi += Number(c)
    }
    else {
      res += c
    }
  }

  return res

}

let s = '3[a2[c]]'

console.log(decodeString(s))