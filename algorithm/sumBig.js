// 大数相加
// 思路：将 Number 转为 String，然后将 String 转为 Array，
// 并且注意补齐较短的数组，将他们的长度标称一样再一一相加得到一个新数组，
// 再将和组成的新数组转为 数字 就可以了
// 参考：https://juejin.im/post/6844903874214494221

var sumBig = function (a, b) {
  a = '0' + a
  b = '0' + b

  let arrA = a.split('')
  let arrB = b.split('')

  let res = []
  let temp = ''
  let carry = 0 // 进位

  let distance = a.length - b.length
  let len = distance > 0 ? a.length : b.length


  if (distance > 0) { // 此处不能单为 distance，需要进行判断正负
    for (let i=0; i<distance; i++) {
      arrB.unshift('0')
    }
  } else {
    for (let i=0; i>distance; i--) {
      arrA.unshift('0')
    }
  }


  for (let j=len-1; j>=0; j--) {
    temp = Number(arrA[j]) + Number(arrB[j]) + carry
    
    if (temp >= 10) {
      carry = 1
      res.unshift((temp + '')[1])
    } else {
      carry = 0
      res.unshift(temp)
    }
  }

res = res.join('').replace(/^0/, '')
console.log(res)
}



sumBig(3435, 213245354)