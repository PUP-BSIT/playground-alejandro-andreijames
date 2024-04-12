//Exercise 1
function identity<identityType>(arg: identityType): identityType {
    return arg;
}

const identityNumber: number = identity(5);
const identityString: string = identity("Andrei");
const identityBoolean: boolean = identity(true);

console.log(identityNumber);
console.log(identityString);
console.log(identityBoolean);

//Exercise 2 - 5
//to be done this week