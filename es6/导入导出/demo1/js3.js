// js3.js
// 使用default关键字，来执行默认导出，默认导出只能有一个
export default {
  fun: function(){
    console.log('fun')
  },
  a: '我是字符串',
  person: class Person{
    constructor(j){
      this.age = j.age;
      this.name = j.name;
    }
  }
}
