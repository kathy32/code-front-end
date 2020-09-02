// 题目27 二叉树的镜像
// 思路：从上到下，依次交换每个节点的左右节点。
var mirroTree = function (root) {
  if (!root)  return null
  
  let leftCopy = root.left
  root.left = root.right
  root.right = leftCopy

  // 对左右子树做相同操作
  mirroTree(root.left)
  mirroTree(root.right)

  return root
}

let tree =  {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}

console.log(mirroTree(tree))