
// 1302. 层数最深叶子节点的和
// https://leetcode-cn.com/problems/deepest-leaves-sum/solution/shen-du-you-xian-bian-li-by-chenchangyuan/

// 思路：遍历二叉树，将 每一层 值以数组的形式存入数组，将获取的数组 末尾 元素叠加求和输出结果


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let arr = []
  let res = 0

  dfs(root, 0)

  if (arr.length === 0) return res 

  for (let i=0; i<arr[arr.length-1].length; i++) {  // 中间条件：从外到里看，子数组最后一个数组长度

  }




  // n 表示层数
  function dfs (root, n) {
    if (!root)  return
    if (!Array.isArray(arr[n])) arr[n] = []

    arr[n].push(root.val)
    dfs(root.left, n+1)
    dfs(root.right, n+1)
  }



}
