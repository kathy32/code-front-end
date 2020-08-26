function TreeNode (value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}


// 题目7 重建二叉树
// 注：前序遍历和中序遍历 都是数组
// preOrder: 1,     2, 4, 7,      3, 5, 6, 8    根左右
// inOrder: 4, 7, 2,     1,      5, 3, 8, 6   左根右
function buildTree (preOrder, inOrder) {
  if (!preOrder.length || !inOrder.length) return null

  const rootVal = preOrder[0]
  const node = new TreeNode(rootVal)

  for (let i=0; i<inOrder.length; i++) {
    if (inOrder[i] === rootVal) {
      node.left = buildTree(preOrder.slice(1, i+1), inOrder.slice(0, i))  
      node.right = buildTree(preOrder.slice(i+1), inOrder.slice(i+1))

      break
    }
  }

  return node
}


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