// 二叉树深度

var maxDepth = function (root) {
  if (root === null) { //注意等号
      return 0;
  } else if (root) {
      var leftDepth = maxDepth(root.left),
          rightDepth = maxDepth(root.right);

      var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;


      return childDepth + 1; //根节点不为空高度至少为1
  }
};


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
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: null
      }
    }
  }


console.log(maxDepth(tree))