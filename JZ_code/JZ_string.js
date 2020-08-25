// 剑指 面试题5 替换空格
// 思路：两个指针，第二个指针指向加上字符串 %20 之后的长度，第一个指针指向原始字符串末尾
// 指针从后往前移动
function replaceBlank (str) {
  if (str === null || str.length <= 0)  return 

  let numberOfBlank = 0
  
  for (let i=0; i<str.length; i++) {
    if (str[i] === ' ') {
      ++numberOfBlank // 计算空格个数
    }
  }

  let indexOfOriginal = str.length  // p1 指针
  let indexOfNew = str.length + numberOfBlank * 2   // p2 指针

  if (indexOfOriginal>0 && indexOfNew>indexOfOriginal) {
    if (str[indexOfOriginal] === ' ') {
      str[indexOfNew--] = '0'
      str[indexOfNew--] = '2'
      str[indexOfNew--] = '%'
    } else {
      str[indexOfNew--] = str[indexOfOriginal]
    }

    --indexOfOriginal
  }
}