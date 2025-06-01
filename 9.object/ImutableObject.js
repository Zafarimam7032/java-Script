// Create an object named 'companyVo' and freeze it to make it immutable
const companyVo = Object.freeze({
  id: 20,
  "company name": "google Pvt Ltd",
  location: "pune",
});

// Log the frozen object to the console
console.log(companyVo); // Output: { id: 20, "company name": "google Pvt Ltd", location: "pune" }

// Attempt to modify the 'location' property of the frozen object
companyVo.location = "gurugram"; // This change will not take effect because the object is frozen

// Log the object to verify that the 'location' property remains unchanged
console.log(companyVo); // Output: { id: 20, "company name": "google Pvt Ltd", location: "pune" }
