let date = "2023/04/02";

console.log(date);
console.log(typeof date);

let date1 = new Date();

console.log(date1);
console.log(typeof date1);
console.log(date1.getDate());
console.log(date1.toLocaleDateString());
console.log(date1.toDateString());

let date2 = new Date(Date.now());

console.log(date2.toLocaleDateString("en-IN"));
