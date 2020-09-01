// 合并两个排序的链表
// 两个指针，比较，小的拿出来给 mergeHead，继续递归比较

var mergeList = function (head1, head2) {
  if (head1 === null) return head2
  else if (head2 === null)  return head1
  
  let mergeHead = null

  if (head1.val < head2.val) {
    mergeHead = head1
    mergeHead.next = mergeList(mergeHead.next, head2)
  } else {
    mergeHead = head2
    mergeHead.next = mergeList(head1, mergeHead.next)
  }

  return mergeHead
}

let head1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 7,
        next: null
        }
      }
    }
  }


let head2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 8,
        next: null
        }
      }
    }
}


console.log(mergeList(head1, head2))
