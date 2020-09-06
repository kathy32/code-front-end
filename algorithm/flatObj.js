// 对象扁平化 tx笔试

let objFlat = function(obj) {
  obj.length = Number(Object.keys(obj).pop()) + 1

  let result = Array.from(obj,function(value,key){
    if(value) {
      return value
    } else {
      return 0  // 空隙默认为0
    }
  })

  result.shift()
  
  return result
}




let a = '{"1":123, "2":234,"8":456}'
let obj = JSON.parse(a)

console.log(objFlat(obj))

