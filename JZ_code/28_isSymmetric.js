// 题目28. 对称的二叉树
// 思路：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/mian-shi-ti-28-dui-cheng-de-er-cha-shu-di-gui-qing/

var isSymmetric = function (root) {
  return root===null ? true : recur(root.left, root.right)
}


var recur = function (L, R) {
  if (L===null && R===null) return true
  if (L===null || R===null || L.val !== R.val) return false

  return recur(L.left, R.right) && recur(L.right, R.left)
}


let tree =  {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}

console.log(isSymmetric(tree))  // true