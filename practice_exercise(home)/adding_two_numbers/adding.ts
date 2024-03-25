const result = document.querySelector("#result") as HTMLElement;

document.querySelector("#add_button")!.addEventListener("click", () => {
    const input1 = document.querySelector("#input_1") as HTMLInputElement;
    const input2 = document.querySelector("#input_2") as HTMLInputElement;

    const sum = addInput(+input1.value, +input2.value);
    result.innerText = `The Sum/Answer from your inputs is: ${sum}`;
})

function addInput (input1: number, input2: number) {
    const sum = input1 + input2;
    //This is just to see the output in the console.
    console.log(`The Sum/Answer from your inputs is: ${sum}`);
    return sum;
}



