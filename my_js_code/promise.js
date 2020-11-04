// 1. 手写 Promise 不完整版本
function Promise () {
  let that = this
  let status = 'pending'
  let res = undefined
  let err = undefined
  let onResolved = [] // 存放成功回调函数
  let onRejected = []

  function resolve () {
    if (that.status === 'pending') {
      onfulfilled(that.res)
      that.status = 'fulfilled'
      that.onResolved.forEach(fn => fn())

    }
  }

  function reject () {
    if (that.status === 'pending') {
      onrejected(that.err)
      that.status = 'rejected'
      that.onRejected.forEach(fn => fn())
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }

}

Promise.prototype.then = function (onfulfilled, onrejected) {
  let that = this

  if (that.status === 'fulfilled') {
    onfulfilled(that.res)
  }

  if (that.status === 'rejected') {
    onrejected(that.err)
  }

  if (that.status === 'pending') {  // 不止一个回调
    that.onResolved.push(() => {
      onfulfilled(that.res)
    })
    that.onRejected.push(() => {
      onrejected(that.err)
    })
  }
}


// 2. Promise.all()
Promise.prototype.all = function (iterator) {
  let count = 0
  let len = iterator.length
  let res = []

  return new Promise((resolve, reject) => {

    for (let item of iterator) {
      Promise.resolve(item) // 先转化为 Promise 对象
        .then(data => {
          res[count++] = data
          if (count === len)  resolve(res)
        })
        .catch(err => reject(err))
    }
  }) 
}

// 3. Promise.race()
Promise.prototype.race = function (iterator) {

  return new Promise((resolve, reject) => {

    for (let item of iterator) {
      Promise.resolve(item)
        .then(res => resolve(res))
        .catch(err => reject(err))
    }
  }) 
}

