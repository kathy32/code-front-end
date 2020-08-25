// 二叉树深度

var maxDepth = function (root) {
  if (root === null) { //注意等号
      return 0;
  } else {
      var leftDepth = maxDepth(root.left),
          rightDepth = maxDepth(root.right);

      var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;

      return childDepth + 1; //根节点不为空高度至少为1
  }
};