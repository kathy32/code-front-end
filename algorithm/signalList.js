
// 1 节点构造函数
function Node (val, next) {
  this.val = val
  this.next = null
}

// 2 定义链表
function LList () {
  this.head = new Node('head')

  this.find = find
  this.insert = insert
  this.remove = remove
  this.findPre = findPre
  this.display = display

}

// 3 查找给定节点
function find (item) {
  var curNode = this.head

  while (curNode.val !== item) {
    curNode = curNode.next
  }

  return curNode
}

// 显示链表
function display () {
  var curNode = this.head

  while (!(curNode.next === null)) {
    console.log(curNode.next.val)
    curNode = curNode.next
  }
}

// 4 插入节点
function insert (newVal, item) {
  var newNode = new Node(newVal)
  var curNode = this.find(item)

  newNode.next = curNode.next
  curNode.next = newNode
}

// 4.2 测试
var fruits = new LList()
fruits.insert('kathy', 'head')
fruits.insert('yicochen', 'kathy')
fruits.display()  // kathy yicochen





// 5 删除节点
// 5.1 找到删除节点的前一个节点
function findPre (item) {
  var curNode = this.head

  while (!(curNode.next === null) && (curNode.next.val !== item)) {
    curNode = curNode.next
  }

  return curNode
}

function remove (item) {
  var preNode = this.findPre(item)

  if (!(preNode.next === null)) {
    preNode.next = preNode.next.next
  }
}


//  6 反转链表
function reverseList (head) {
  let [preNode, curNode] = [null, head]

  while (curNode) {
    [curNode.next, preNode, curNode] = [preNode, curNode, curNode.next]
  }

  return preNode
}




