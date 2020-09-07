// 手写 bind 
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    console.error("type error.")
  }

  let args = [...arguments].slice(1)
  let fn = this
  
  return function() {
      let newArg = [...arguments]
     
      return fn.apply(context, args.concat(newArg))
  }
}

// 测试
let Person = {
  name: 'Tom',
  say(age) {
      console.log(this)
      console.log(`我叫${this.name}我今年${age}`)
  }
}

Person1 = {
  name: 'Tom1'
}

let fn = Person.say.myBind(Person1)
fn()
fn(18)


// 手写 call
Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error("type error.")
  }

  let args = [...arguments].slice(1)
  let result = null
  context = context || window
  context.fn = this

  result = context.fn(...args)

  delete context.fn

  return result

}


// 手写 apply
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    console.error("type error.")
  }

  let result = null
  context = context || window // 判断传入上下文对象是否存在
  context.fn = this

  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result

}