// 题目36:二叉树与双向链表

// 描述：输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环 双向链表。
// 要求不能创建任何新的节点，只能调整树中节点指针的指向。

// 思路：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/mian-shi-ti-36-er-cha-sou-suo-shu-yu-shuang-xian-5/


function Node (val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

class Solution {
  constructor () {
    this.pre = new Node()
    this.head = new Node()
  }


  treeToDoublyList (root) {
    if (root === null)  return null

    this.dfs(root)

    // 中序遍历完成后，head 指向头节点， pre 指向尾节点
    // 进行头节点和尾节点的相互指向
    this.head.left = this.pre
    this.pre.right = this.head  

    return this.head
  }


  // 中序遍历
  dfs (cur) {
    if (cur === null) return  // 当节点 curcur 为空，代表越过叶节点，直接返回；

    this.dfs(cur.left)

    // 构建链表
    // pre用于记录双向链表中位于cur左侧的节点，
    // pre!==null时，cur左侧存在节点pre，需要进行pre.right=cur的操作。
    if (this.pre !== null)  this.pre.right = cur

    // 代表正在访问链表头节点，记为 head
    else this.head = cur 

    cur.left = this.pre
    this.pre = cur  // 保存 cur，即节点 cur 是后继节点的 pre

    this.dfs(cur.right) //全部迭代完成后，pre指向双向链表中的尾节点

  }
}


let tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}


let travel = new Solution()

console.log(travel.treeToDoublyList(tree))
