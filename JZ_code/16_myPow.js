// 参考：https://xxoo521.com/2019-12-31-pow/
// 数值的整次方

// 递归

// 剑指 offer 112 页公式，指数相加。
// 如果exponent是偶数，Power(base, exponent) = Power(base, exponent / 2) * Power(base, exponent / 2)
// 如果exponent是奇数，Power(base, exponent) = base * Power(base, exponent / 2) * Power(base, exponent / 2)

var myPow = function (x, n) {
  const isNegative = n < 0  // isNegative 为布尔值
  const res = absMyPow(x, Math.abs(n))  // 需要考虑指数为负数的情况，难点

  return isNegative ? 1 / res : res
}

function absMyPow (base, exponent) {
  if (exponent === 0) return 1

  else if (exponent === 1)  return base

  // 难点
  else {
    let subRes = absMyPow(base, Math.floor(exponent / 2))
    return exponent % 2 ? subRes * subRes * base : subRes * subRes
  } 
}


console.log(myPow(2, 5))  // 32