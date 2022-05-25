(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHello = function () {
            console.log("annimal is barking");
        };
        return Animal;
    }());
    ;
    var dog = new Animal("狗");
    dog.sayHello();
})();
