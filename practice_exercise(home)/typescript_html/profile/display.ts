const full_name = document.querySelector("#name") as HTMLInputElement;
const age = document.querySelector("#age") as HTMLInputElement;
const contact = document.querySelector("#contact") as HTMLInputElement;
const button = document.querySelector("#submit") as HTMLButtonElement;
const result = document.querySelector("#result") as HTMLElement;

button!.addEventListener("click", () => {
    const output_name = full_name.value;
    //used two different ways to convert data type into number
    const output_age = +age.value;
    const output_contact = parseInt(contact.value);

    //FOR HTML OUTPUT
    result.innerHTML = `
    This is what we got.
    Full Name: ${output_name}
    Age: ${output_age}
    Contact Number: ${output_contact}
    `;

    //FOR CONSOLE LOG PURPOSES
    console.log(`
        This is what we got.
        Full Name: ${output_name}
        Age: ${output_age}
        Contact Number: ${output_contact}
    `);
});

