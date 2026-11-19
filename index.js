const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");

    if (display.value === "") return;

    try {
        const result = new Function("return " + display.value)();
        display.value = eval(display.value)
    } catch {
        display.value = "Error";
    }
}