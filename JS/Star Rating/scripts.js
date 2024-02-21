const container = document.getElementById("star_container");
const rating = document.querySelectorAll(".star");
const rated = document.getElementById("rated");
let selected = 0;

container.addEventListener("click", function (e) {
  let currentClicked = e.target.dataset.index;

  for (let i = 0; i < selected; i++) {
    rating[i].classList.remove("filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    rating[i].classList.add("filled");
  }

  // keep track for future rating
  selected = currentClicked;

  rated.innerText = `You rated: ${currentClicked}`;
});

container.addEventListener("mouseover", function (e) {
  let currentClicked = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    rating[i].classList.remove("filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    rating[i].classList.add("filled");
  }
});

container.addEventListener("mouseleave", function () {
  for (let i = 0; i < 5; i++) {
    rating[i].classList.remove("filled");
  }

  for (let i = 0; i < selected; i++) {
    rating[i].classList.add("filled");
  }
});
