/*
1 primitive
 7 type : String,Number,Boolean,null,undefined,symbol,bigint

2. refrence (non premitive)

3 type:Array,function,Object
*/

//primitive all primitive data type will copy of memory
//String
let myName = "Zafar imam";

console.log(myName);
console.log(typeof myName);

//number

let accountNumber = 23343222;

console.log(accountNumber);
console.log(typeof accountNumber);

//Boolean

let checkFlag = true;

console.log(checkFlag);
console.log(typeof checkFlag);

// null
let tempture = null;

console.log(tempture);
console.log(typeof tempture);

//undefine

let undefineDataType;

console.log(undefineDataType);
console.log(typeof undefineDataType);

//Symbol
let city = "pune";

let sym = Symbol(city);

console.log(sym);
console.log(typeof sym);

/* refrence data type =>it will give refrence for exact data */
//Array

let cities = ["pune", "mumbai", "agra", "tundla"];

console.log(cities);
console.log(cities[2]);
cities[4] = "Hyderabad";

console.log(cities);
console.log(typeof cities);

//Object
let employeeVo = {
  id: 1,
  name: "Zafar imam",
  Department: "Software Engineer",
};

console.log(employeeVo);
console.log(employeeVo.Department);
console.log(typeof employeeVo);
employeeVo.id = 30;
console.log(employeeVo);

let firstfunction = function () {
  console.log("this is first function");
};

console.log(firstfunction);
console.log(typeof firstfunction);

function add(a, b) {
  console.log(a + b);
}

add(20, 40);

function sub(a, b) {
  return a - b;
}

let result = sub(100, 45);
console.log(result);

let arr1 = ["zafar", "kirti", "manoj", "neeraj"];

console.log(typeof arr1);

console.log(arr1[1]);

const arr2 = [1, 2, 3, 4];

console.log(arr2);

let arr4 = arr2.filter((num) => num % 2 == 0);

console.log(arr4);

let studentVo = {
  name: "zafar imam",
  mobileNumber: "+917032871006",
  address: "Pune",
};

console.log(studentVo);
console.log(studentVo.name);
studentVo.name = "Kirti Singh";

console.log(studentVo.name);

console.log(typeof studentVo);
