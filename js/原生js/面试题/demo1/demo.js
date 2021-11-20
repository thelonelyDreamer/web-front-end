
var name = '小红';
function a(){
	var name = '小白';
	console.log(this.name);
}

function d(i){
	return i();
}

var b = {
	name: '小黄',
	detail: function(){
		console.log(this.name);
	},
	bibi:function(){
		return function(){
			console.log(this.name);
		}
	}
}
console.log(this);
a();
var c =b.detail;
b.a=a;
var e= b.bibi();
a();
c();
b.a();
d(b.detail);
e();