let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = `Error : ${e}`;
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key == "/" ||
    key == "*" ||
    key == "+" ||
    key == "-" ||
    key == "."
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Escape" || key == "C") {
    clearDisplay();
  }
});
