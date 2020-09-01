// 题目26：树的子结构
// 思路：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/

// 先序遍历树 A 中的每个节点
var hasSubtree = function (A, B) {
  return (A!==null && B!==null) && (recur(A, B) || hasSubtree(A.left, B) || hasSubtree(A.right, B))
}

// 判断树 A 中 以 nA 为根节点的子树 是否包含树 B
var recur = function (A, B) {
  if (B === null) return true
  if (A === null || A.val !== B.val) return false 

  return recur(A.left, B.left) && recur(A.right, B.right)
}


let A = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
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

let B = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}


console.log(hasSubtree(A, B)) // true