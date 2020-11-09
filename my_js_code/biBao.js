function outFn() {
  var num = 123    // 被闭包所引用的变量，不会被回收
  
	return function() {
		console.log(num)
	}
}
// 调用完了函数以后,变量仍然存在,导致泄漏

// 查看内存情况：
// 命令行可以使用 Node 提供的process.memoryUsage方法



var a= 1;
function f() {
  console.log(a); // undefined
  var a = 2;
}

f();