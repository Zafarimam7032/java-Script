const randomNumber = Math.floor(Math.random() * 100) + 1;

const textField = document.querySelector("#textField");
const btnsubmit = document.querySelector("#btnsubmit");
const prevId = document.querySelector("#prevId");
const remId = document.querySelector("#remId");
const div = document.querySelector("#resultid");

const p = document.createElement("p");
div.appendChild(p);
const h6 = document.createElement("h2");
div.appendChild(h6);
btnsubmit.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(textField.value);
  const inputData = parseInt(textField.value);
  textField.value = "";
  console.log(inputData);
  validateNumber(inputData);
});

let guesses = [];
let remainingusses = 11;
let start = true;
function validateNumber(guess) {
  if (start) {
    if (isNaN(guess)) {
      alert("please enter Number");
    } else if (guess < 1) {
      alert("please enter greater number not less then 1");
    } else if (guess > 100) {
      alert("please enter lesser number not greater then 100");
    }
    checkGuess(guess);
  } else {
    startGame();
  }
}

function checkGuess(guess) {
  guesses.push(guess);
  remainingusses--;
  if (remainingusses < 1) {
    start = false;
    textField.setAttribute("disabled", "");
    h6.innerHTML = `random Number was: ${randomNumber}`;
    startGame();
  } else if (guess === randomNumber) {
    display("number matched");
    textField.setAttribute("disabled", "");
    startGame();
  } else if (guess > randomNumber) {
    display(`Number is too High ${guess}`);
  } else if (guess < randomNumber) {
    display(`Number is too Low ${guess}`);
  }
}

function display(message) {
  remId.innerHTML = remainingusses;
  prevId.innerHTML = guesses;
  p.innerHTML = message;
}
function startGame() {
  p.innerHTML = "Please click to start the game";

  p.addEventListener("click", function (e) {
    e.preventDefault();
    p.innerHTML = "";
    guesses = [];
    remainingusses = 10;
    h6.innerHTML = "";
    start = true;
    textField.removeAttribute("disabled");
    display("");
  });
}
