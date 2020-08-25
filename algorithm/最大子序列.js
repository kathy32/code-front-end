function maxList (arr) {
  let max_num = 0
  let max_index = []
  let l1 = []
  let l2 = []

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
      max_num = max_num + arr[i]
      max_index.push(i)
      if (i === arr.length-1) { // 重要，防止最后的一段序列被遗漏
        l1.push(max_num)
        l2.push(max_index)
      }
    } else if (arr[i] < 0){
      l1.push(max_num)
      l2.push(max_index)
      max_num = 0
      max_index = []
    }
  }

  // 求最大子序列
  let temp = 0
  let temp_index = 0
  for (let i=0; i<l1.length; i++) {
    if (l1[i] > temp) {
      temp = l1[i]
      temp_index = i
    }
  }

  console.log(l1)
  console.log(temp)
  console.log(temp_index)
  console.log(l2[temp_index])
}

// 测试
n = [3, 5, 3, 7, -1, 7, 6, 6, 5, 6]
maxList(n)