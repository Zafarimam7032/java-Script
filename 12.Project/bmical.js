const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.querySelector("#result");
  if (height == "" || isNaN(height)) {
    result.innerHTML = "please inter valid text";
  } else if (weight == "" || isNaN(weight)) {
    result.innerHTML = "please inter valid text";
  } else {
    result.innerHTML = height + weight;
  }
});
