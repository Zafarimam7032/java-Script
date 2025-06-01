// Function expression with a unique name
const deptFunction = function () {
  console.log("this is log");
};

console.log(deptFunction); // Logs the function definition
console.log(deptFunction()); // Executes the function and logs "this is log"

// Arrow function with a different name
let show = () => {
  console.log("this arrow function");
};

show(); // Executes the arrow function and logs "this arrow function"

// Function declaration with a unique name
function deptInfo() {
  console.log("this is information");
}

deptInfo(); // Executes the function declaration and logs "this is information"
