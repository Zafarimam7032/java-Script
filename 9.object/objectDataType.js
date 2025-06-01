// Create a unique symbol key for the "department" property
let department = Symbol("department");

// Define an object to represent a student's details
let studentVo = {
  name: "Zafar Imam", // String value for the student's name
  address: "Pune", // String value for the student's address
  mobileNumber: "+911234567890", // String value for the student's mobile number
  [department]: "developer", // Assign a symbol key with the value "developer"
};

// Access and log the value of the property with the symbol key
console.log(studentVo[department]); // Output: "developer"

// Freeze the object to prevent any modifications
Object.freeze(studentVo); // Makes the object immutable; no properties can be added, removed, or changed

// Attempt to change the "name" property after freezing the object
studentVo.name = "Kirti"; // This line has no effect because the object is frozen

// Log the value of the "name" property to show it remains unchanged
console.log(studentVo.name); // Output: "Zafar Imam"
