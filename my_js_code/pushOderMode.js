// 一个播放器
class Player {
  constructor () {
    // 初始化观察者列表
    this.watchers = {}  // hash 列表

    // 模拟2秒后发布一个 paly 事件
    setTimeout(() => {
      this._publish('play', true)
    }, 2000)

    // 模拟4秒后发布一个 pause 事件
    setTimeout(() => {
      this._publish('pause', true)
    }, 4000)
  }

  // 发布事件
  _publish (event, data) {
    if (this.watchers[event] && this.watchers[event].length) {  // {'event': [fn1, fn2...]}
      this.watchers[event].forEach(callback => callback.bind(this)(data))
    }
  }

  // 订阅事件
  subscribe (event, callback) {
    this.watchers[event] = this.watchers[event] || []
    this.watchers[event].push(callback)
  }

  // 退订事件
  unsubscribe (event=null, callback=null) {
    // 如果传入指定事件函数，则仅退订此事件函数
    if (event && callback) {
      if (this.watchers[event] && this.watchers[event].length) {
        // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
        // Object.is() 方法判断两个值是否为同一个值。
        this.watchers[event].splice(this.watchers[event].findIndex(cb => Object.is(cb, callback)), 1)
      }
    }

    // 如果传入事件名称，则退订此事件对应的所有的事件函数
    else if (event) {
      this.watchers[event] = []
    }

    // 如果未传入任何参数，则退订所有事件
    else {
      this.watchers = {}
    }
  }

}

// 测试
// 实例化播放器
const player = new Player()
console.log(player) // Player { watchers: {} }

// 播放事件回调函数1
const onPlayerPlay1 = function (data) {
  console.log('play', data)
}

const onPlayerPlay2 = data => {
  console.log('play', data)
}

// 暂停事件回调函数
const onPlayerPause = data => {
  console.log('pause', data)
}

// 加载事件回调函数
const onPlayerLoaded = data => {
  console.log('loaded', data)
}


// 可订阅多个不同事件
player.subscribe('play', onPlayerPlay1)
player.subscribe('play', onPlayerPlay2)
player.subscribe('pause', onPlayerPause)
player.subscribe('loaded', onPlayerLoaded)

/*
Player {
  watchers: {
    play: [ [Function: onPlayerPlay1], [Function: onPlayerPlay2] ],
    pause: [ [Function: onPlayerPause] ],
    loaded: [ [Function: onPlayerLoaded] ]
  }
}
*/
console.log(player)


// 可以退订指定订阅事件
player.unsubscribe('play', onPlayerPlay2) // play pause
// 退订指定事件名称下的所有订阅事件
player.unsubscribe('play')  // pause
// 退订所有订阅事件 
player.unsubscribe()  // 空


// 可以在外部手动发出事件（真实生产场景中，发布特性一般为内部私有方法）
player._publish('loaded', true)
player.subscribe('loaded', onPlayerLoaded)

console.log(player) // Player { watchers: { loaded: [ [Function: onPlayerLoaded] ] } }
