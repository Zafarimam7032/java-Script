const td1 = document.getElementById("t1");
const td2 = document.getElementById("t2");
const td3 = document.getElementById("t3");

window.addEventListener("keydown", function (event) {
  reset();
  td1.innerHTML = event.key == " " ? "space" : event.key;
  td2.innerHTML = event.code;
  td3.innerHTML = event.keyCode;
});

function reset() {
  td1.innerHTML = "";
  td2.innerHTML = "";
  td3.innerHTML = "";
}
