var result = document.querySelector("#result");
document.querySelector("#add_button").addEventListener("click", function () {
    var input1 = document.querySelector("#input_1");
    var input2 = document.querySelector("#input_2");
    var sum = addInput(+input1.value, +input2.value);
    result.innerText = "The Sum/Answer from your inputs is: ".concat(sum);
});
function addInput(input1, input2) {
    var sum = input1 + input2;
    //This is just to see the output in the console.
    console.log("The Sum/Answer from your inputs is: ".concat(sum));
    return sum;
}
