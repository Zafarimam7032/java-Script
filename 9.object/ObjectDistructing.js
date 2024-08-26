const employeeVo = {
  fName: "Zafar",
  lname: "Imam",
  company: "cognizant ovt ltd",
  department: "full stack developer",
};

const { lname } = employeeVo;
const { fName: firstName } = employeeVo;

console.log(firstName);
console.log(lname);
