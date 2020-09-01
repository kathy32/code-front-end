// 链表的倒数第k个节点
// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/solution/mian-shi-ti-22-lian-biao-zhong-dao-shu-di-kge-j-11/

function FindKthToTail( head, k) {
  let former = head
  let latter = head

  for (let i=0; i<k; i++) {
    former = former.next
  }

  while (former !== null) {
    former = former.next
    latter = latter.next
  }

  return latter
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
            val: 5,
            next: null
          }
        }
      }
    }
  }
}

console.log(FindKthToTail(head1, 2))