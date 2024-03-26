const result = document.querySelector("#output") as HTMLElement;

document.querySelector("#calculate_button")!.addEventListener("click", () => {
    const length = document.querySelector("#length") as HTMLInputElement;
    const width = document.querySelector("#width") as HTMLInputElement;

    const output = calculate(+length.value, +width.value);
    result.innerText = `The Area of your input values: ${output}`;
});

function calculate(length:number, width:number) {
    const formula = length * width;

    //FOR CONSOLE LOG PURPOSES
    console.log(`The Area of your input values: ${formula}`);
    return formula;
} 

