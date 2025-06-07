const start = document.getElementById("start");
const stop = document.getElementById("stop");
const div = document.getElementById("dvid");

const heading = document.createElement("h1");
div.appendChild(heading);

start.addEventListener(
  "click",
  function (e) {
    setTimeout(timeout, 1000);
  },
  false
);

function timeout() {
  heading.innerHTML = "this is time out";
}

stop.addEventListener(
  "click",
  function () {
    clearTimeout();
  },
  false
);
