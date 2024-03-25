//Let us do number arrays first.
const numberArrays1 = [100, 200, 300, 400, 500];
const numberArrays2 = [550, 600, 650, 700, 1000];
const getter = "The merged array contents are now: ";

function mergeArrays<Merge>(numberArrays1: Merge[], numberArrays2: Merge[]): Merge[] {
    const container = numberArrays1.concat(numberArrays2);
    return container;
}

console.log(getter, mergeArrays(numberArrays1, numberArrays2));