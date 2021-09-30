# 一、输入输出

## 1.1 输入

(1) 方式一：

> **window.prompt**("提示信", 预定输入信息);

```javascript
var usename = window.prompt("请输入您的姓名：","张三");
```

## 1.2 输出

(1) 方式一：

> 使用 **window.alert()** 弹出警告框。

```javascript
window.alert(5 + 6);
```

(2) 方式二：

> 使用 **document.write()** 方法将内容写到 HTML 文档中

```javascript
document.write(Date());
```

> 注：  请使用 document.write() 仅仅向文档输出写内容。
>
> 如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。

(3) 方式三：

> 使用 **innerHTML** 写入到 HTML 元素

```javascript
document.getElementById("demo").innerHTML = "段落已修改。";
```

(4) 方式四：

> 使用 **console.log()** 写入到浏览器的控制台

```javascript
a = 5;
b = 6;
c = a + b;
console.log(c);
```

# 二、常量与变量

## 2.1 常量

## 2.2 变量

(1) 变量的命名规则

> 1. 以字母、下划线、$开头；
> 2. 区分大小写；
> 3. 由字母、下划线、$或数字组成；
> 4. 不能使用关键字和保留字

(2) 

# 三、注释

> 行内注释： //
>
> 多行注释： /*  */

# 四、数据类型

> **值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
>
> **引用数据类型**：对象(Object)、数组(Array)、函数(Function)。

**注：**Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

> 弱类型语言

```
var a;
x=5;
x='zhangsan';
```



## 4.1 String

```javascript
var answer="It's alright";
var answer="He is called 'Johnny'";
var answer='He is called "Johnny"';
```

> var result = new String;

## 4.2  Number

```javascript
var x1=34.00;      //使用小数点来写
var x2=34;         //不使用小数点来写
var y=123e5;      // 12300000
var z=123e-5;     // 0.00123
```

## 4.3 Boolean

```javascript
var x=true;
var y=false;
```

## 4.4 Null

值为空值

## 4.5 Undefined

Undefined 这个值表示变量不含有值

## 4.6 Object

```javascript
var person={
    firstname:"John", 
    lastname:"Doe", 
    id:5566,
    getName:function(){
        return this.firstname
    }
};
// 两种访问属性的方法
name = person.lastname;
name=person["lastname"];
// 访问方法
person.getName;
/*
ƒ (){
        return this.firstname
}
*/
person.getName();
// "John"
```

## 4.7 Array

```javascript
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
var cars=new Array("Saab","Volvo","BMW");
var cars=["Saab","Volvo","BMW"];
```

**注：** 下标从0开始

## 4.8 Function

函数也是一种类型

函数的定义与C语言类似

变量的作用范围与生存周期也类似

注意不使用var 定义的变量将作为window对象的属性为全局变量，可以删除。

```javascript
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1
console.log(window.var2); // 2

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义
```

# 五、事件

