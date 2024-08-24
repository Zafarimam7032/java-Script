function display() {
  console.log("this is first function");
}
display();

function add(num, num1) {
  console.log(`add for ${num} and ${num1} is  ${num + num1}`);
}

add(30, 40);

function checkNumber(...num) {
  console.log(num);
}

checkNumber(12, 23, 21, 343, 89);

function divs(a, b) {
  return a / b;
}
let result = divs(20, 10);
console.log(`div of two is ${result}`);
