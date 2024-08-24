let arr = ["zafar", "imam", "kirti", "Nishi", "Himani", "hanuman"];

console.log(arr);

let arr1 = new Array("hi", "hello", "namaste", "salam", "prnam");
console.log(arr1);

console.log(arr1.concat(arr));
console.log(arr.concat(arr1));

console.log(arr.push("momhamed"));

console.log(arr);

console.log(arr1.pop());
console.log(arr1);
console.log(arr1.at(2));
console.log(arr.join("-"));

console.log(arr.toString());
console.log(arr.unshift("love"));
console.log(arr);

console.log(arr1.shift());
console.log(arr1);

// console.log(arr.delete(arr[3]));
// console.log(arr);

console.log(arr.slice(1, 3));
console.log(arr);

console.log(arr.splice(1, 3));
console.log(arr);
