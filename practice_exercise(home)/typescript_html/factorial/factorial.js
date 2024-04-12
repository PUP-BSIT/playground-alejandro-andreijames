var result = document.querySelector("#answer");
document.querySelector("#calculate").addEventListener("click", function () {
    var given = document.querySelector("#input");
    var output = factorial(+given.value);
    result.innerHTML = "The factorial of your given input is: ".concat(output);
});
function factorial(given) {
    var fact = 1;
    for (var x = 1; x <= given; x++) {
        fact = fact * x;
    }
    return fact;
}
