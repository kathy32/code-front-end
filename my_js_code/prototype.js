function Person () {
  this.a = 4
  
  return {
    a: 5,
    b: 6
  }
}


Person.prototype.a = 7
Person.prototype.b = 8
Person.prototype.c = 9


let kathy = new Person()

console.log(kathy.a)  // 5
console.log(kathy.b)  // 6
console.log(kathy.c)  // undefined


// 变：
function Person1 () {
  this.a = 4

}


Person1.prototype.a = 7
Person1.prototype.b = 8
Person1.prototype.c = 9


let kathy1 = new Person()

console.log(kathy1.a)  // 4
console.log(kathy1.b)  // 8
console.log(kathy1.c)  // 9

