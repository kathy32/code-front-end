// 题目34：二叉树中和为某一值的路径（回溯）
// 思路：先序遍历，记录节点值

// pathSum(root, sum)
// 初始化：结果列表 res,路径列表 path
// 返回值：返回 res

// recur(root, tar)
// 递推参数：当前节点 root，当前目标值 tar
// 终止条件：root 为空
// 递推工作：
// 1. 路径更新：当前节点值 root.val 加入路径 path
// 2. 目标更新：tar = tar - root.val
// 3. 路径记录：当root 为叶节点且路径和等于目标值，将path 加入 res
// 4. 先序遍历：递归左/右子节点
// 5. 路径恢复：向上回溯前，需要将当前节点从 path 中删除，执行 path.pop()

class Solution {
  constructor () {
    this.path = []
  }

  pathSum (root, sum) {
    this.recur(root, sum)
  }

  recur (root, tar) {
    if (root === null)  return

    this.path.push(root.val)
    tar -= root.val

    if (tar===0 && root.left===null && root.right===null) {
      console.log(this.path)
    }

    this.recur(root.left, tar)  // 根左右, 递归
    this.recur(root.right, tar)

    this.path.pop() // 回溯
  }
}


let tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1, 
        left: null,
        right: null
      }
    }
  }
}


let sumTree = new Solution()

// console.log(sumTree.pathSum(tree, 22))
sumTree.pathSum(tree, 22)