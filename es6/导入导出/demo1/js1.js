// js1.js
// 导出方法
export function fun(){
  console.log('function');
}
// 导出变量
export const str = '我是字符串';

// 导出类
export class Person{
  constructor(j){
    this.name = j.name,
    this.age = j.age;
  }
}
