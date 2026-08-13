// Display ko select karo
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "C") {

            display.value = "";

        }

        else if (value === "DEL") {

            display.value = display.value.slice(0, -1);

        }

        else if (value === "=") {

            try {

                const expression = display.value;

                const result = eval(expression);

                display.value = result;

                const historyList = document.getElementById("history-list");

                const li = document.createElement("li");

                li.textContent = expression + " = " + result;

                historyList.prepend(li);

            }

            catch {

                display.value = "Error";

            }

        }

        else if (value === "%") {

            try {

                display.value = eval(display.value) / 100;

            }

            catch {

                display.value = "Error";

            }

        }

        else {

            display.value += value;

        }

    });

});

// 👇 Ye forEach ke baad aayega

const clearHistory = document.getElementById("clear-history");

clearHistory.addEventListener("click", () => {

    document.getElementById("history-list").innerHTML = "";

});