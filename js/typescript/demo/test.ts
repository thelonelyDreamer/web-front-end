(function(){
	class Animal{
		name:string;
		constructor(name:string){
			this.name=name;
		}
		sayHello(){
			console.log("annimal is barking");
		}
	};
	let dog = new Animal("狗");
	dog.sayHello();
})();