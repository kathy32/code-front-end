// 1. ajax
$('#btn').click(function(){
  $ajax({
  url: '',
  type: 'GET',
  data: '',
  success(){}
  })
})

// 2. 用 Promise 对象实现的 Ajax 操作
function getJSON (url) {
  const promise = new Promise(function (resolve, reject) {

    const handler = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()
  })

  return promise
}

getJSON("/post.json")
  .then(res => console.log(res))
  .catch(err => console.log(err))