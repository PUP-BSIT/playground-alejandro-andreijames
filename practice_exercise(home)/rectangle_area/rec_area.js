var result = document.querySelector("#output");
document.querySelector("#calculate_button").addEventListener("click", function () {
    var length = document.querySelector("#length");
    var width = document.querySelector("#width");
    var output = calculate(+length.value, +width.value);
    result.innerText = "The Area of your input values: ".concat(output);
});
function calculate(length, width) {
    var formula = length * width;
    //FOR CONSOLE LOG PURPOSES
    console.log("The Area of your input values: ".concat(formula));
    return formula;
}
