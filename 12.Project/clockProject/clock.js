setInterval(function () {
  let time = new Date();
  // console.log(time.toLocaleTimeString());
  const timeField = document.querySelector("#time");
  timeField.innerHTML = time.toLocaleTimeString();
}, 1000);
