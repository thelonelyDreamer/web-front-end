// js2.js
// 统一暴漏
// 导出方法
function fun(){
  console.log('function');
}

// 导出变量
const a = '我是字符串';

// 导出类
class Person{
  constructor(j){
    this.name = j.name,
    this.age = j.age;
  }
}
// 这里是es6简写形式
export {fun, a, Person};
// 页可以给上边的名称从新命名
//export {fun as abc, b, Person}
