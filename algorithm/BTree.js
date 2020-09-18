function newNode(value){
  this.value = value;
  this.left = null;
  this.right = null;
}


// 1. 插入操作
// 插入操作很简单，即用 递归 依次比较插入值与结点值的大小，找到插入的位置
function InsertNode (root, key) {
  if (!root.value) {   //如果根结点不存在，则建立根结点
      root.value = key;
      return true; 
  }

  if (root.value > key) {  //当前结点值比插入值大，说明插入位置在当前结点值的左子树中
      if (root.left){  //如果有左孩子结点，继续比较
          InsertNode(root.left, key);
      } else {   //插入操作
          root.left = new newNode(key);
      }
  }else if (root.value < key) { //当前结点值比插入值小，说明插入位置在当前结点值的右子树中
      if (root.right){ //如果有右孩子结点，继续比较
          InsertNode(root.right, key);
      } else {  //插入操作
          root.right = new newNode(key);
      }
  } else {  //树中已存在插入值的结点
      return false;
  }

  return true;
}


// 2. 建立操作
// 二叉排序树的建立就是多次执行 插入 操作
function create (array) {
  var tree = new newNode(null);  //建立根节点

  for (let i=0; i < array.length; i++){
      InsertNode(tree, array[i]);
  }

  return tree;
}


// 3. 遍历
// 二叉排序树中序遍历的输出结果就是结点值 从小到大排序 的结果
function InOrderTraverse (root){
  if (!root) return;

  InOrderTraverse(root.left);
  console.log(root.value);
  InOrderTraverse(root.right);
}


// 4. 删除操作
// 首先找到删除值的结点
// 情况一： 若该结点是 叶子结点，则直接将其置为 null
// 情况二： 若其具有左子树或右子树，则将左孩子结点或右孩子结点 赋值 给当前结点。
// 情况三： 若当前结点既有左子树，又有右子树，
        // 则在其左子树中，寻找一个和当前结点值最接近的孩子结点（即中序遍历结果中当前结点的 前驱），
        // 将当前结点的值 替换 为该孩子结点的值，替换后，树中此时就有两个重复的值，因此，再利用递归 删除 重复的孩子结点

function deleteNode(root, key){
    if (!root){
        console.log("删除失败");
        return root;
    }

    if (root.value > key){  //若当前结点值大于删除值，则继续在左子树中寻找删除值
        root.left = deleteNode(root.left, key);
    } else if (root.value < key) {  //若当前结点值小于删除值，则继续在右子树中寻找删除值
        root.right = deleteNode(root.right, key);
    } else {  //找到与删除中相等的结点
        if (root.left === null & root.right === null) {  //叶子结点
            root = null;
        } else if (root.left === null){  //只有右子树
            root = root.right;
        } else if (root.right === null){  //只有左子树
            root = root.left;
        } else {  //同时具有左右子树
            let prevNode = root.left;
            while(prevNode.right){  //寻找不大于当前结点值的最大结点值
                prevNode = prevNode.right;
            }
            root.value = prevNode.value;  //替换值
            root.left = deleteNode(root.left, prevNode.value);  //递归左子树，删除重复值的结点
        }
    } 
    
    return root;
}


