//1.创建一个Promise对象
let promise = new Promise((resolve, reject) => {
  //执行器函数，同步回调
  let time = new Date();
  setTimeout(function () {
    if (time % 2) {
      resolve("promise成功状态" + time);
    } else {
      reject("promise失败时间" + time);
    }
  }, 1000);
});
console.log("promise 对象使用之前");
promise.then(
  //接收得到成功的value值
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
).catch(
	(err)=>{
		console.log(err);
	}
);
console.log("promise 对象使用之后");

// 这是异步的
// promise 对象使用之前
// promise 对象使用之后
// "promise成功状态" + time或者"promise失败时间" + time
// catch 方法得回调函数抛出异常才会执行