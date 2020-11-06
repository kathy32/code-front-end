function TreeNode (value) {
  this.value = value
  this.left = null
  this.right = null
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
    if (inOrder[i] === rootVal) { // 根据前序根 -> 找中序根
      node.left = buildTree(preOrder.slice(1, i+1), inOrder.slice(0, i))  
      node.right = buildTree(preOrder.slice(i+1), inOrder.slice(i+1))

      break
    }
  }

  return node
}


