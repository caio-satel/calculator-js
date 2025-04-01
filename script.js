// Inicializar o valor do display
const display = document.querySelector(".display-content");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const changeSign = document.getElementById("change-sign");
const del = document.getElementById("delete");

display.innerHTML = "0";

clear.addEventListener("click", () => {
    display.innerHTML = "0";
});

equals.addEventListener("click", () => {
    if (display.innerHTML === "0") {
        return;
    } else {
        display.innerHTML = eval(display.innerHTML);
    }
});

del.addEventListener("click", () => {
    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        display.innerHTML = "0";
    }
});

percent.addEventListener("click", () => {
    const value = percent.getAttribute("data-value");

    if (display.innerHTML === "0") {
        return;
    } else {
        display.innerHTML += value;
    }
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        const value = number.getAttribute("data-value");

        if (display.innerHTML === "0" && value !== ".") {
            display.innerHTML = value;
        } else {
            display.innerHTML += value;
            console.log(display.innerHTML);
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        const value = operator.getAttribute("data-value");

        if (display.innerHTML === "0") {
            return;
        } else {
            display.innerHTML += value;
            console.log(display.innerHTML);

        }
    });
});