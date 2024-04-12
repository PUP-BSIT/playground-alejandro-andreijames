function AddProp(constructor: Function, metadata: Object) {
    constructor.prototype.age = 3;
}

@AddProp
class Person {
    constructor(private name: String) {
        console.log(`${this.name}`);
    }
}

const person = new Person(`Arnel Cerafica`);
const person2 = new Person(`Sopas Cayetano`);
console.log(person.age);