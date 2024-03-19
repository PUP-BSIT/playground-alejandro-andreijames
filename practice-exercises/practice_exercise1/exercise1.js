var myPet = {
    animal_name: "Buddy",
    species: "Dog",
    age: 5,
    isPet: true
};
var adnanPet = {
    animal_name: "Kucing",
    species: "Cat",
    age: 0.3,
    isPet: true
};
var desPet = {
    animal_name: "Krystel",
    species: "Tyrannosaurus",
    age: 5000,
    isPet: false
};
function printAnimalInfo(animal) {
    console.log("Animal info:", animal.animal_name);
    console.log("Animal species:", animal.species);
    console.log("Animal age:", animal.age);
    console.log("Is this animal a pet? :", animal.isPet ? "Yes" : "No");
    console.log("-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-");
}
printAnimalInfo(myPet);
printAnimalInfo(adnanPet);
printAnimalInfo(desPet);
