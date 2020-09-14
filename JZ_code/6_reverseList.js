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