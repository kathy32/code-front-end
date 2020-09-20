// 浏览器兼容 js 部分
// 参考：https://segmentfault.com/a/1190000015722419

// 1. 添加事件
var addHandler = function (element, type, handler) {

  // 检测是否为 DOM2 级方法
  if (element.addEventListener) { 
    element.addEventListener(type, handler, false)  // 冒泡执行
  } 
  
  // 检测是否为 IE 级方法
  else if (element.attachEvent) { 
    element.attachEvent('on' + type, handler) // 事件名，回调函数
  } 

  // 检测是否为 DOM0 级方法
  else {
    element['on' + type] = handler  // 冒泡执行
  }
}


// 2. 移除事件方法
var removeHandler = function (element, type, handler) {
  // DOM2
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false)
  }

  // IE
  else if (element.detachEvent) {
    element.detachEvent('on' + type, handler)
  }

  // DOM0
  else {
    element['on' + type] = null
  }
}


// 3. 获取事件及事件对象目标

// event：事件处理对象，包含与创建它的特定事件有关的属性和方法。
// 其中target（事件的目标）是其中一个成员 

// 3.1 获取 事件对象 的兼容写法
var getEvent = function (event) {
  return event ? event : window.event
}
// 3.2 获取 事件对象目标 的兼容写法
var getTarget = function (event) {
  return event.target || event.srcElement
}



// 4. 阻止默认事件及冒泡
// 4.1 阻止默认事件
var preventDefault = function (event) {
  if (event.preventDefault) {
    event.preventDefault()
  }

  else {
    event.returnValue = false
  }
}

// 4.1 阻止事件冒泡
var stopPropagation = function (event) {
  if (event.stopPropagation) {
    event.stopPropagation()
  }

  else {
    event.cancelBubble = true
  }
}


// 4. 获取 mouseover 和 mouseout 事件相关元素
// relatedTarget 只对mouseover和mouseout事件才包含值，对于其他事件，这个属性值为null
var getRelatedTarget = function (event) {

  if (event.relatedTarget) {
    return event.relatedTarget
  }

  // 在 mouseout 事件触发时，IE的toElement属性保存了相关元素。
  else if (event.toElement) {
    return event.toElement
  }

  // 在 mouseover 事件触发时，IE的fromElement属性保存了相关元素
  else if (event.fromElement) {
    return event.fromElement
  }

  else {
    return null
  }
}

