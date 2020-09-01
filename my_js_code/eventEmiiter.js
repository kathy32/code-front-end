// 实现一个自定义 event 事件，包括 on，off，trigger，once
// 思路：https://www.cnblogs.com/yinping/p/10697152.html

class EventEmiiter {
  constructor () {
    this.handlers = {}  // 记录所有事件及处理函数 { click: [fn1, fn2] }  hashMap
  }

  /**
   * on 添加事件监听
   * @param {事件类型} eventName
   * @param {事件处理函数} handler
   */
  on (eventName, handler, once=false) {

    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }
    
    if (!this.handlers[eventName].includes(handler)) {
      this.handlers[eventName].push(handler)
      handler.once = once
    }
  }

  /**
   * off 取消事件监听
   * @param {要取消的事件类型} eventName
   * @param {要取消的事件函数，如果不传则清除所有} handler
   */
  off (eventName, handler) {
    if (this.handlers[eventName]) {
      if (handler === undefined) {
        this.handlers[eventName] = []
      } else {
        this.handlers[eventName] = this.handlers[eventName].filter(f => f!==handler)
      }
    }
  }

  /**
   * once 只执行一次
   * @param {事件类型} eventName
   * @param {要执行的函数} handler
   */
  once (eventName, handler) {
    this.on(eventName, handler, true)
  }

  /**
   * trigger 执行函数
   * @param {要执行哪个类型的函数} eventName
   * @param {事件对象} eventData
   * @param {this执行} point
   */
  trigger (eventName, eventData, point=this) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach(f => {
        f.call(point, eventData)
        if (f.once) {
          point.off(eventName, f)
        }
      })
    }
  }
}




// 测试
let e = new EventEmiiter;
e.on('click', () => console.log(1))
e.on('click', () => console.log(2))
function fn3 () {
  console.log(3)
}
e.on('click', fn3)

console.log(e)


/* 
EventEmiiter {
  handlers: { click: [ [Function], [Function], [Function] ] }
}
*/
