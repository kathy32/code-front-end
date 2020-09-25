// 题目35 复杂链表的复制
// 思路：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/tong-guo-hashmaplai-shi-xian-by-try-62/

function Node (val, next, random) {
  this.val = val
  this.next = next
  this.random = random
} 


// Map: 将对象作为键值
var copyRandomList = function (head) {
  if (!head)  return null

  const map = new Map()
  let cur = head // 当前节点

  // 复制节点值
  while (cur !== null) {
    // 存储 set <key, value>
    map.set(cur, new Node(cur.val)) // 顺序遍历，存储老节点和新节点
    cur = cur.next
  }

  // 复制节点指向
  cur = head
  while (cur !== null) {
    // 得到 get <key>.value
    map.get(cur).next = map.get(cur.next) // 新节点next 指向同旧节点的 next指向
    map.get(cur).random = map.get(cur.random) 
    cur = cur.next
  }

  // 返回复制的链表
  return map.get(head)
}



// 测试
// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
let head = {
  val: 7,
  next: {
    val: 13,
    next: {
      val: 11,
      next: {
        val: 10,
        next: {
          val: 1,
          next: null,
          random: {
            val: 7
          }
        },
        random: {
          val: 11
        }
      },
      random: {
        val: 1
      }
    },
    random: {
      val: 7
    }
  },
  random: {
    val: null
  }
}

let head1 = {
  val: 7,
  next: {
    val: 13,
    next: {
      val: 11,
      next: {
        val: 10,
        next: {
          val: 1,
          next: null,
          random: 7
        },
        random: 11
      },
      random: 1
    },
    random: 7
  },
  random: null
}



console.log(copyRandomList(head1))