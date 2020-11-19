
// 先执行宏任务，再执行then 微任务
// 1000毫秒之后 输出 1
new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve()
  }, 1000)
}).then((data) => {
  console.log('1')
})



// 变形 1, 3, 2
new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve()
      console.log(3)
  }, 1000)
  console.log(1)
}).then(() => {
  console.log(2)
})


// 神策面试
new Promise ((resolve, reject) => {
  console.log(1)

  setTimeout(() => {
    console.log(2)
  })
  
  resolve()
}).then(() => {console.log(3)})

console.log(4)

// 1,4,3,2



new Promise((resolve, reject) => {
  console.log(1)

  setTimeout(() => {
    console.log(2)
  },300)
  
  resolve()

}).then(() => {
  console.log(3)
}).then(() => {
  return new Promise(() => {
    console.log(4)
  })
}).then(() => {
  console.log(5)
})  

// 1,3,4,2
// 注意：没有5！return 了