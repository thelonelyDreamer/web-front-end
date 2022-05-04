// 这是利用es6的对象结构赋值，把导出的多有成员项结构出来
import {fun, a, Person} from './module_1.js';

// 这种方式也是，module_2导出的是一个对象，所以直接把对象的项结构出来
//由于上边导入的模块有相同的名字，所以我们可以使用as给导出的项取别名
import {fun as fun1, a as a1, Person as person1} from './module_2.js';

// 由于module_3使用的是default关键字默认导出，
// 所以es6在导出的时候把，default作为键名导出的项对象集合作为键值进行导出
// 这里导入的时候使用 as关键字进行别名设置，这里不能直接写defautl关键字进行导入
import { default as module3} from './module_3.js';

简单导出，只是针对默认导出方式
// 可以省略default，和 as关键字，直接使用别名进行导入
import module3 from './module_3.js';
