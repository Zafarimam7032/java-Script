const oldata = document.querySelector(".no-count");
oldata.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    const target = e.target;
    target.remove();
  }
});
