const result = function (a, b) {
  return a + b;
};

console.log(result(10, 20));

(function display() {
  console.log("this is display function");
})();

const round = (a, b) => Math.floor(a / b);

const c = round(100, 30);
console.log(c);

create(); //function hoisting
function create() {
  console.log("create function");
}
