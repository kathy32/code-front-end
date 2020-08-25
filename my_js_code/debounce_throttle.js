// 防抖
function debounce (fn, delay) {
  let timer = null

  return function () {
    let context = this
    let args = arguments

    if (timer) {
      clearTimeout (timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.call(context, args)
    }, delay)
  }
}

// 节流
function throttle (fn, delay) {
  let lastTime = 0

  return function () {
    let nowTime = Date.now()
    
    if (nowTime - lastTime > delay) {
      fn()
      lastTime = nowTime
    }
  }
}