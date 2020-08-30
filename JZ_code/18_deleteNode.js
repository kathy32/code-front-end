// 题目18: 删除链表的节点
// 情况一：当前有
// 情况二：当前下一个有
// 情况三：都没有，指针下移

function Node (val, nex) {
  this.val = val
  this.nex = null
}

var deleteNode = function (head, x) {
  let pre = head
  let cur = head

  if (cur.val === x)  return cur.next

  while (cur && cur.next) {
   
    if (cur.next.val === x) cur.next = cur.next.next
    else cur = cur.next
  }

  return pre
}


// 测试
let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}


console.log(deleteNode(head, 2))