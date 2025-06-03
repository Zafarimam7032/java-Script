let num = new Number(300);

console.log(num); //[Number: 300]

let num1 = 5000;

console.log(num1);
console.log(typeof num);
console.log(typeof num1);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

let descimalNumber = 2343.9943;

console.log(Math.round(descimalNumber));
console.log("=======================");

console.log("Min: " + Math.min(12, 34, 13, 123, 453, 1));
console.log("Max: " + Math.max(12, 34, 13, 123, 453, 1));

console.log(Math.abs(descimalNumber));
console.log("================================");

console.log(Math.random());

for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 1000) + 1);
}
