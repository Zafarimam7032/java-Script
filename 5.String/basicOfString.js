let bankAcoountholderName = "zafar imam"; //first way to declare String in java Script

console.log(bankAcoountholderName);
bankAcoountholderName.toLowerCase();

let bankName = new String("Axis bank"); //second way to decare string in java script

console.log(bankName);
console.log(bankName.toUpperCase());
console.log(bankName.length);
console.log(bankName.charAt(1));

console.log(bankName.concat(" bank of india"));

console.log(bankName.replace("i", "z"));
console.log(bankName.slice(1, 2));

console.log(bankName.split(" "));

console.log(
  `string printing ${bankAcoountholderName} another varable ${bankName}`
);
