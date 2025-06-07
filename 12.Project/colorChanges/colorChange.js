const start = document.getElementById("start");
const stop = document.getElementById("stop");
const bd = document.getElementById("bd");
let inverValid;
start.addEventListener("click", function (e) {
  clearInterval(inverValid);
  inverValid = setInterval(startColoring, 1000);
});
function startColoring() {
  bd.style.backgroundColor = genereteHexColor();
}

stop.addEventListener("click", function (e) {
  clearInterval(inverValid);
});

function genereteHexColor() {
  const hexCode = "0123456789abcdef";
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    const hex = Math.floor(Math.random() * 16);
    hexcolor += hexCode[hex];
  }
  return hexcolor;
}
