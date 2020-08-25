// 阶乘
function factorlize (n) {
  if (n <= 1) return 1

  return n * factorlize(n-1)  
}

// console.log(factorlize(3))