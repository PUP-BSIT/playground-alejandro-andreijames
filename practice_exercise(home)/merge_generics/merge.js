var numberArrays1 = [100, 200, 300, 400, 500];
var numberArrays2 = [550, 600, 650, 700, 1000];
var getter = "The merged array contents are now: ";
function mergeArrays(numberArrays1, numberArrays2) {
    var container = numberArrays1.concat(numberArrays2);
    return container;
}
console.log(getter, mergeArrays(numberArrays1, numberArrays2));
