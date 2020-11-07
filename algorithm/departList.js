// 拆分链表
// 思路：https://leetcode-cn.com/problems/partition-list/solution/fen-ge-lian-biao-by-leetcode/
// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5

function Node (val, next) {
  this.val = val
  this.next = null
}


var departList = function(head, x) {
  let before_head = new Node(0)
  let before = before_head
  let after_head = new Node(0)
  let after = after_head

  // 易错点：head 不为空一直下一个
  while (head) {
    
    if (x > head.val) {
      before.next = head  // 节点的复制
      before = before.next
    } else {
      after.next = head
      after = after.next
    }

    head = head.next
  }
  after.next = null
  before.next = after_head.next

  return before_head.next
}



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
            val: 5
            
          }
        }
      }
    }
  }
}





console.log(departList(head1, 3))