const image = document.getElementById("image");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

let index = 0;
let intervalId;

const images = [
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681149342561-96713cd1728a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

image.src = images[index];

nextSlide.addEventListener("click", function () {
  clearInterval(intervalId);
  nextSlideHandler();
  autoplay();
});

function nextSlideHandler() {
  index = (index + 1) % images.length;
  image.src = images[index];
}

prevSlide.addEventListener("click", function () {
  if (index === 0) {
    index = images.length - 1;
  } else {
    index -= 1;
  }
  image.src = images[index];
});

function autoplay() {
  intervalId = setInterval(nextSlideHandler, 3000);
}

autoplay();
