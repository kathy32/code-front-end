// 数据类型判断
function _typeof(obj){
  var s = Object.prototype.toString.call(obj);

  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};


_typeof([12,3,343]);
"array"

_typeof({name: 'zxc', age: 18});
"object"

_typeof(1);
"number"

_typeof("1");
"string"

 _typeof(null);
"null"

_typeof(undefined);
"undefined"

_typeof(NaN);
"number"

_typeof(Date);
"function"

_typeof(new Date());
"date"

_typeof(new RegExp());
"regexp"