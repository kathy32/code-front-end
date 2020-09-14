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

/**
 * @param {number} m 行数
 * @param {number} n 列数
 * @return {number} 路径条数
 */
var paths = function(m, n) {
  let dp = []

  for (let i=0; i<n; i++) dp[0][i] = 1
  for (let j=0; j<m; j++) dp[j][0] = 1

  for (let i=1; i<m; i++) {
    for (let j=1; j<n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};

console.log(paths(3, 6))




