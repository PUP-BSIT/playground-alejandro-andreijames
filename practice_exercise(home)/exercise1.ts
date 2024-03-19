type Animal = {
    animal_name: string,
    species: string,
    age: number,
    isPet: boolean
}

const myPet: Animal = { 
    animal_name: "Buddy",
    species: "Dog",
    age: 5,
    isPet: true
}

const adnanPet: Animal = { 
    animal_name: "Kucing",
    species: "Cat",
    age: 0.3,
    isPet: true
}

const desPet: Animal = { 
    animal_name: "Krystel",
    species: "Tyrannosaurus",
    age: 5000,
    isPet: false
}

function printAnimalInfo(animal: Animal): void {
    console.log("Animal info:", animal.animal_name);
    console.log("Animal species:", animal.species);
    console.log("Animal age:", animal.age);
    console.log("Is this animal a pet? :", animal.isPet ? "Yes":"No");
    console.log("-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-");
}

printAnimalInfo(myPet);
printAnimalInfo(adnanPet);
printAnimalInfo(desPet);
