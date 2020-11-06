// new 操作符具体干了什么呢？如何实现？

// （1）首先 创建 了一个新的空对象
// （2）设置 原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的 返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。


var newObj = function () {
  let newObject  = null
  let constructor = Array.prototype.shift.call(arguments) // 传入的参数是一个构造函数（new）
  let res = null

  // 判断是否为构造函数类型
  if (typeof constructor !== 'fucntion')  return

  newObject = Object.create(constructor.prototype)

  res = constructor.call(newObject, arguments)

  // 判断返回对象
  let flag = res && (typeof res === 'object' || typeof res === 'function')

  return flag ? res : newObject

}


// 使用方法
// newObj (构造函数，初始化参数)
console.log(newObj(Array, 1))