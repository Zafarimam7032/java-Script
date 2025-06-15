function outerFunction() {
  let outerVar = "I am from outer scope";

  function innerFunction() {
    console.log(outerVar); // innerFunction closes over outerVar
  }

  return innerFunction; // Return the function itself, not the result
}

const myClosure = outerFunction(); // outerFunction runs, returns innerFunction
myClosure(); // Calls innerFunction, which remembers outerVar
