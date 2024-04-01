const result = document.querySelector("#answer") as HTMLElement;

document.querySelector("#calculate")!.addEventListener("click", () => {
    const given = document.querySelector("#input") as HTMLInputElement;

    const output = factorial(+given.value);
    result.innerHTML = `The factorial of your given input is: ${output}`;
});

function factorial (given: number) {
    let fact = 1;
    
    for (let x = 1; x <= given; x++) {
        fact = fact * x; 
    }
    return fact;
}
