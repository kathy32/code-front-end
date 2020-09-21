async function f() {
  return 123
}

// 相当于
async function f() {
  return Promise.resolve(123)
}
// 会传递给后边的 then()