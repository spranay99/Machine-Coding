const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const reset = document.getElementById("reset");
const result = document.getElementById("output");

let counter = 0;

addition.addEventListener("click", function () {
  counter++;
  result.innerHTML = counter;
});

subtraction.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  result.innerHTML = counter;
});

reset.addEventListener("click", function () {
  counter = 0;
  result.innerHTML = counter;
});
