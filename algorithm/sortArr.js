// 腾讯笔试
// 输入两个数组，输出排序后的数组
// [1,2,4] [1,2,3]
// 输出：[1,1,2,2,3,4]


let a = readline().split(',')
let b = readline().split(',')

var arrSort = function (a, b) {
  return a.concat(b).sort((a, b) => a-b)
}

console.log(arrSort(a, b))