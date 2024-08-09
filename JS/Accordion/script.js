const allTitle = document.querySelectorAll(".accordion__title");
const allContent = document.querySelectorAll(".accordion__content");

let count = allTitle.length;
let show = Array(count).fill(false);

allTitle.forEach((title, index) => {
  title.addEventListener("click", () => {
    if (show[index]) {
      show[index] = false;
      allContent[index].style.display = "block";
    } else {
      show[index] = true;
      allContent[index].style.display = "none";
    }
  });
});
