const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach((b) => {
  console.log(b);
  b.addEventListener("click", function (event) {
    switch (event.target.id) {
      case "box1":
        body.style.backgroundColor = "black";
        break;
      case "box2":
        body.style.backgroundColor = "blue";
        break;
      case "box3":
        body.style.backgroundColor = "red";
        break;
      default:
        body.style.backgroundColor = "orange";
    }
  });
});
