enum DistanceUnit {
    KILOMETER = "km",
    MILE = "m"
}

type Vehicle = {
    plate_no: string;
    owner_name: string;
    speed: number;
    printSpeed(): void;
}

type Person = {
    full_name: string;
    birthday: Date;
    speed: number;
    printSpeed();
}

const myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed() {
        console.log(`The current speed of ${this.plate_no} is ${this.speed}`);
    }
}

const janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed() {
        console.log(`The current speed of ${this.full_name} is ${this.speed}`);
    }
}

function speedTest(contestant: Contestant):void {
    contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);

type Contestant = Person | Vehicle;