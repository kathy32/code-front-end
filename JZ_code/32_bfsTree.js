// 面试题32 - I. 从上到下打印二叉树
// 思路：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/solution/mian-shi-ti-32-i-cong-shang-dao-xia-da-yin-er-ch-4/

var levelOder = function (root) {
  if (root === null)  return []

  let queue = [root]
  let res = []

  while (queue.length !== 0) {
    let node = queue.pop()  //  重点看图解ppt
    res.push(node.val)

    if (node.right) queue.push(node.right)  // 栈：先进后出，BFS需要出栈先左后右
    if (node.left) queue.push(node.left)
    
  }

  return res
}


let tree = {
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



console.log(levelOder(tree))