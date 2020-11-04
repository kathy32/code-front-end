// 剑指 面试题5 替换空格
// 思路：两个指针，第二个指针指向加上字符串 %20 之后的长度，第一个指针指向原始字符串末尾
// 指针从后往前移动
// 当 c 为空格时：向 res 后添加字符串 "%20" ；
// 当 c 不为空格时：向 res 后添加字符 c ；
function replaceBlank (str) {
  if (str === null || str.length <= 0)  return 

  let numberOfBlank = 0
  
  for (let i=0; i<str.length; i++) {
    if (str[i] === ' ') {
      ++numberOfBlank // 计算空格个数
    }
  }

  let indexOfOriginal = str.length-1  // p1 指针
  let indexOfNew = str.length + numberOfBlank * 2 -1   // p2 指针

  for (indexOfOriginal, indexOfNew; indexOfNew>indexOfOriginal; indexOfOriginal--, indexOfNew--) {
    
    if (str[indexOfOriginal] != ' ') {
      str[indexOfNew] = str[indexOfOriginal]
    } else {
      str[indexOfNew-2] = '0'
      str[indexOfNew-1] = '2'
      str[indexOfNew] = '%'
      indexOfNew -= 2
    }  
  }

  return str
}


var replaceBlank2 = function (s) {
  return s.replace(' ', '%20')
}

let s = "We are happy."
console.log(replaceBlank2(s))
