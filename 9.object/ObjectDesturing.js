// Create an object named 'employeeVo' representing an employee's data
let employeeVo = {
  id: 12,
  name: "Zafar Imam",
  address: "Pune",
  skills: "JavaScript",
};

// Use object destructuring to extract the 'id' property from 'employeeVo'
let { id } = employeeVo; // Extracts the 'id' property
console.log(id); // Logs the value of 'id', which is 12

// Use object destructuring with a renamed variable to extract the 'name' property
let { name: employeName } = employeeVo; // Extracts the 'name' property and renames it to 'employeName'
console.log(employeName); // Logs the value of 'employeName', which is "Zafar Imam"
