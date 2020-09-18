// 快手

// 输入 aaa-bbb-ccc
// 输出 aaaBbbCcc

var regStr = function (str) {
  // 注意1: 正则不是字符串，不能加引号，转义字符为\
  // 注意2：每一个匹配的需要 return
  return str.replace(/\-(\w)/g, function (x) {
    return x.slice(1).toUpperCase()
  })
}


let str = 'aaa-bbb-ccc'
console.log(regStr(str))