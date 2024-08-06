const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer;
let hr = 0;
let min = 0;
let sec = 0;

let hrString, minString, secString;

startBtn.addEventListener("click", () => {
  timer = true;
  startWatch();
});

stopBtn.addEventListener("click", () => {
  timer = false;
});

resetBtn.addEventListener("click", () => {
  hr = 0;
  min = 0;
  sec = 0;
  timer = false;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

function startWatch() {
  if (timer) {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    hrString = hr;
    minString = min;
    secString = sec;

    if (sec < 10) {
      secString = "0" + sec;
    }
    if (min < 10) {
      minString = "0" + min;
    }
    if (hr < 10) {
      hrString = "0" + hr;
    }

    document.getElementById("sec").innerHTML = secString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("hr").innerHTML = hrString;

    setTimeout(startWatch, 1000);
  }
}
