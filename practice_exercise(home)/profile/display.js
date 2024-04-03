var full_name = document.querySelector("#name");
var age = document.querySelector("#age");
var contact = document.querySelector("#contact");
var button = document.querySelector("#submit");
var result = document.querySelector("#result");
button.addEventListener("click", function () {
    var output_name = full_name.value;
    //used two different ways to convert data type into number
    var output_age = +age.value;
    var output_contact = parseInt(contact.value);
    //FOR HTML OUTPUT
    result.innerHTML = "\n    This is what we got.\n    Full Name: ".concat(output_name, "\n    Age: ").concat(output_age, "\n    Contact Number: ").concat(output_contact, "\n    ");
    //FOR CONSOLE LOG PURPOSES (To check data types.)
    console.log("\n        This is what we got.\n        Full Name: ".concat(output_name, "\n        Age: ").concat(output_age, "\n        Contact Number: ").concat(output_contact, "\n    "));
});
