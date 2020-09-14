
// 字符串压缩
var comperStr = function (str) {
  let result = ''
  result += str[0]
  let count = 1

  for (let i=1; i<str.length; i++) {
    if (str[i] === result[result.length-1]) {
      count += 1
    } else {
      if (count > 1) {
        result = result + '' + count
       
      }
      count = 1
      result += str[i]
    }
  }

  if (count>1) {
    result = result + '' + count
  }

  return result
}


let str = 'aabccccaaa'

console.log(comperStr(str)) // a2bc4a3