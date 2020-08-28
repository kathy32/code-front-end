var reverseFive = function (n) {
  let tempJ = []
  let tempY = []

  while (Math.floor(n / 5) !== 0 || Math.floor(n % 5) !== 0) {
    tempJ.push(Math.floor(n / 5))
    tempY.push(Math.floor(n % 5))
    
    n = Math.floor(n / 5)
  }

  let res = ''

  for (let i=0; i<tempY.length; i++) {
    res = res + tempY[i]
  }

  return Number(res)
}


// let n = readInt()
console.log(reverseFive(77267))



var reverseF = function (n) {
  var result  = 0;
  var reminder = 0;

  while(n > 0){
    reminder = n % 10;
    result = result * 10 + reminder;
    n /= 10;
  }

  var num = '';
  reminder = 0;

  while(result > 0){
    reminder = result % 5;
    result /= 5;
    num = reminder + num;
  }

  console.log(num)

}


var n = readInt()
reverseF(n)









