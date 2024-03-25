//Let us do number arrays first.
const numberArrays1 = [100, 200, 300, 400, 500];
const numberArrays2 = [550, 600, 650, 700, 1000];

//Text-filler
const getter = "The merged array contents are now: ";

function mergeArrays<Merge>(Arrays1: Merge[], Arrays2: Merge[]): Merge[] {
    const container = Arrays1.concat(Arrays2);
    return container;
}

console.log(getter, mergeArrays(numberArrays1, numberArrays2));

//Now, String type.
const stringArrays1 = ["Steven", "Andrei", "James"];
const stringArrays2 = ["Vacation", "Study", "Code"];

console.log(getter, mergeArrays(stringArrays1, stringArrays2));

//Let's try, boolean type.
const booleanArrays1 = [true, true, true];
const booleanArrays2 = [false, false, false];

console.log(getter, mergeArrays(booleanArrays1, booleanArrays2));