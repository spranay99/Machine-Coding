const button = document.getElementById("button");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const mcontainer = document.getElementById("modal_container");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
