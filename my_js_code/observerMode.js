// 观察者模式
//参考：https://segmentfault.com/a/1190000010914032

// 观察者模式通过维护一堆 列表 来管理对象间的多对多关系，
// 中介者模式通过统一接口来维护一对多关系，
// 且通信者之间不需要知道彼此之间的关系，只需要约定好API即可。


// 汽车
class Bus {
  constructor () {
    // 初始化所有乘客
    this.passengers = {}
  }

  // 发布广播
  broadcast (passenger, message=passenger) {
    // 如果车上有乘客
    if (Object.keys(this.passengers).length) {

      // case1: 如果是针对某个乘客发的，就单独给他听
      if (passenger.id && passenger.listen) {

        // 乘客他爱听不听
        if (this.passengers[passenger.id]) {
          this.passengers[passenger.id].listen(message)
        }
      }

      // case2: 不然就广播给所有乘客
      else {
        Object.keys(this.passengers).forEach(passenger => {
          if (this.passengers[passenger].listen) {
            this.passengers[passenger].listen(message)
          }
        })
      }
    }
  }


  // 乘客上车
  aboard (passenger) {
    this.passengers[passenger.id] = passenger
  }


  // 乘客下车
  debus (passenger) {
    this.passengers[passenger.id] = null
    delete this.passengers[passenger.id]
    console.log(`乘客${passenger.id}下车`)
  }


  // 开车
  start () {
    this.broadcast({type: 1, content: '前方无障碍，开车！Over'})
  }


  // 停车
  end () {
    this.broadcast({type: 2, content: '老司机翻车，停车！Over'})
  }
}


// 乘客
class Passenger {
  constructor (id) {
    this.id = id
  }

  // 听广播
  listen (message) {
    console.log(`乘客${this.id}收到消息`, message)
    // 乘客发现停车了，于是自己下车
    if (Object.is(message.type, 2)) {
      this.debus()
    }
  }

  // 下车
  debus () {
    console.log(`我是乘客${this.id}，我要下车`, bus)
    bus.debus(this)
  }
}



// 创建一辆汽车
const bus = new Bus()

// 床架两个乘客
const passenger1 = new Passenger(1)
const passenger2 = new Passenger(2)

// 两乘客分别上车
bus.aboard(passenger1)
bus.aboard(passenger2)

// 2秒后开车
// 乘客1收到消息 { type: 1, content: '前方无障碍，开车！Over' }
// 乘客2收到消息 { type: 1, content: '前方无障碍，开车！Over' }
setTimeout(bus.start.bind(bus), 2000) 

// 3秒时司机发现2号乘客没买票，2号乘客被驱逐下车
// 乘客2收到消息 { type: 3, content: '同志你好，你没买票，请下车!' }
// 乘客2下车
setTimeout(() => {
  bus.broadcast(passenger2, {type:3, content: '同志你好，你没买票，请下车!'})
  bus.debus(passenger2)
}, 3000)


// 4秒后到站停车
// 乘客1收到消息 { type: 2, content: '老司机翻车，停车！Over' }
// 我是乘客1，我要下车 Bus { passengers: { '1': Passenger { id: 1 } } }
// 乘客1下车
setTimeout(bus.end.bind(bus), 4000)

// 6秒后再开车，车上已经没乘客了
setTimeout(bus.start.bind(bus), 6000)