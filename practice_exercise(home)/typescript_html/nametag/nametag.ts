const Result = document.querySelector("#result") as HTMLElement;

document.querySelector("#generate")!.addEventListener("click", () => {
    const FirstName = document.querySelector("#first_name") as HTMLInputElement;
    const MiddleName = document.querySelector("#middle_name") as HTMLInputElement;
    const LastName = document.querySelector("#last_name") as HTMLInputElement;

    Result.innerText = `Hello, I am ${LastName.value}, ${FirstName.value}, ${MiddleName.value}!`;

    //For console log purposes
    console.log(`Hello, I am ${LastName.value}, ${FirstName.value}, ${MiddleName.value}!`);
});