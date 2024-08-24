const studentvo = {
  firstName: "Zafar",
  lastName: "imam",
  age: 30,
  email: "zafarimam@google.com",
};

console.log(studentvo);

console.log(studentvo.firstName);
console.log(studentvo.lastName);

console.log(studentvo["firstName"]);

const employeeVo = new Object();

console.log(employeeVo);

employeeVo.employeeId = "emp123";
employeeVo.empName = "zafar Imam";
employeeVo.email = "zafar@microsoft.com";

console.log(employeeVo);

Object.freeze(employeeVo);
employeeVo.empName = "Rehan Khan";

console.log(employeeVo.empName);
