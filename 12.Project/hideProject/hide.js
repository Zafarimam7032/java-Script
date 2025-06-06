const oldata = document.querySelector(".no-count");
oldata.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  target.remove();
});
