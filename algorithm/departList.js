// 拆分链表
// 思路：https://leetcode-cn.com/problems/partition-list/solution/fen-ge-lian-biao-by-leetcode/
// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5

function Node (val, next) {
  this.val = val
  this.next = null
}

function LList () {
  this.head = new Node('head')
}


var departList = function (head, x) {
  let before_head = new Node(0)
  let before = before_head
  let after_head = new Node(0)
  let after = after_head

  while (!head) {
    if (head.val < x) {
      before.next = head
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

// 缺少测试部分