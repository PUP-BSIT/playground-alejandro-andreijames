function myFactory(myMessage: String) {
    return function Func1(constructor: Function, metadata: Object) {
        console.log("Logging...");
        console.log(constructor);
        console.log(myMessage);
    }
}

@myFactory(`This is a message from user:`)
class Person {
    private name: String
    
    constructor(name: String) {
        this.name = name;
        console.log(this.name);
    }
}

const person1 = new Person("ALDEN Alejandro");
console.log(person1);
