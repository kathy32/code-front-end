/**
 * 有一个 m 行 n 列的矩阵地图，起点位于左上角，终点位于右下角。
 * 
 * 一个机器人要从起点走到终点，而且每一步只能往前走（往右或往下），不能往回走。
 * 
 * 实现一个算法，输入 m 和 n，输出机器人从起点走到终点有多少条不同的路径。
 * 
 * 比如：
 * 输入: m = 2, n = 3 输出 3
 * 解释：
 * 1. 右 -> 右 -> 下
 * 2. 右 -> 下 -> 右
 * 3. 下 -> 右 -> 右
 * 
 * 输入：m = 3, n = 6 输出 21
 */

// 思路：https://leetcode-cn.com/problems/unique-paths/solution/
// 重要图示：https://leetcode-cn.com/problems/unique-paths/solution/tu-jie-bu-tong-lu-jing-shu-c-by-vin-18/

/**
 * @param {number} m 行数
 * @param {number} n 列数
 * @return {number} 路径条数
 */

var paths = function(m, n) {
  // 重难点：创建二维数组，值为0
  let dp = Array.from({length:m}, () => Array.from({length:n}, () => 0))

  // 注意，对于第一行 dp[0][j]，或者第一列 dp[i][0]，由于都是在边界，所以只能为 1
  for (let i=0; i<n; i++) dp[0][i] = 1  // 将第一行初始为1
  for (let j=0; j<m; j++) dp[j][0] = 1  // 将第一列初始为1

  for (let i=1; i<m; i++) { // 从第二行第二列开始遍历，记录到达每一个格子的不同路径数
    for (let j=1; j<n; j++) {
      // 右下格子：右 -> 下 || 下 -> 右
      dp[i][j] = dp[i-1][j] + dp[i][j-1]  // 相邻并且已遍历格子 的路径数之和
    }
  }

  return dp[m-1][n-1]
};

console.log(paths(3, 7))  // 28




