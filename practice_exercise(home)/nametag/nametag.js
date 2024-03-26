var Result = document.querySelector("#result");
document.querySelector("#generate").addEventListener("click", function () {
    var FirstName = document.querySelector("#first_name");
    var MiddleName = document.querySelector("#middle_name");
    var LastName = document.querySelector("#last_name");
    Result.innerText = "Hello, I am ".concat(LastName.value, ", ").concat(FirstName.value, ", ").concat(MiddleName.value, "!");
    //For console log purposes
    console.log("Hello, I am ".concat(LastName.value, ", ").concat(FirstName.value, ", ").concat(MiddleName.value, "!"));
});
