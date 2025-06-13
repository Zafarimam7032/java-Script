function display() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("this is will print in 2 second"), 2000);
  });
}
async function asyncFunction() {
  console.log("fecthing....");

  const log = await display();
  console.log(log);
}

asyncFunction();
