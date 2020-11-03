// 最大公约数
function gcd2 (a,b) {
  var result = 1;

  for (var i = 1; i <= a && i <= b; i++ ) {
      if (a%i === 0 && b%i === 0 ) {
          result = i;
      }
  }
  return result;
}

console.log(gcd2(6,12))



// 最小公倍数
function scm (a,b) {
  return (a*b)/gcd2(a,b);
}

console.log(scm(6,12))