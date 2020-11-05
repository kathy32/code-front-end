// 题目6 从尾到头打印链表
// 方法一：反转链表
function reverseList (head) {
  let [preNode, curNode] = [null, head]

  while (curNode) {
    [curNode.next, preNode, curNode] = [preNode, curNode, curNode.next]
  }

  return preNode
}

// 方法二：反转数组 
function reversePrint (head) {
  if (head === null)  return []
  let res = []
  
  while (head) {
    res.push(head.val)
    head = head.next
  }

  return res.reverse()
}


// 测试
let head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 2,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}

console.log(reversePrint(head1))