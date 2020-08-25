function checkIP () {
  obj=document.getElementByIdx_x("ip").value

  //ip地址
  var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  var reg = obj.match(exp);

  if (reg==null) {
  console.log("IP地址不合法！");
  } else {
  console.log("IP地址合法！");
  }
}



// var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.$/