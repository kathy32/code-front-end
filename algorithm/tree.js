// 1. 递归 先序遍历 树 DLR
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

function preOrder (root) {
  if (root) {
    console.log(root.value)
    preOrder(root.left)
    preOrder(root.right)
  }
}

// preOrder(tree)