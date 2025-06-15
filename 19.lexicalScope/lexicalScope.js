function outFunction() {
  let name = "zafar Imam";
  function innerFunction() {
    let language = "java script";
    console.log(name);
  }
  // console.log(language); //not accessable
  innerFunction();
}
outFunction();
