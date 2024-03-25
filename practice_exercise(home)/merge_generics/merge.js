//Let us do number arrays first.
var numberArrays1 = [100, 200, 300, 400, 500];
var numberArrays2 = [550, 600, 650, 700, 1000];
//Text-filler
var getter = "The merged array contents are now: ";
function mergeArrays(Arrays1, Arrays2) {
    var container = Arrays1.concat(Arrays2);
    return container;
}
console.log(getter, mergeArrays(numberArrays1, numberArrays2));
//Now, String type.
var stringArrays1 = ["Steven", "Andrei", "James"];
var stringArrays2 = ["Vacation", "Study", "Code"];
console.log(getter, mergeArrays(stringArrays1, stringArrays2));
