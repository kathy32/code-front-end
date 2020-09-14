// 题目10 斐波那契数列
// 第一项为 0，第二项为 1，第三项以后的值都等于前面两项的和
// f(n) = f(n - 1) + f(n - 2)
function fib (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  let res1 = 0
  let res2 = 1

  for (let i=1; i<n; i++) {
    let temp = res1
    res1 = res2
    res2 = (temp + res2) % 1000000007
  }

  return res2
}


// 变：青蛙跳台阶
function numWays (n) {
  if (n <= 1) return 1
  let dp = [1, 1, 2]
  const Max = 1e9 + 7

  for (let i=2; i<=n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % Max
  }

  return dp[n]
}
