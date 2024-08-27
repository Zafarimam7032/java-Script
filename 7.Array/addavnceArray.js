let arr3 = [23, 2, 4, 2, 4, [34, 4, 3, 53, [343, 43, 54, 34]]];

// console.log(arr3.flat(Infinity));
// let firstName = "zafar";
// let lastName = "imam";
// console.log(Array.of(firstName, lastName));

const cities = ["pune", "hyderabad", "patna"];
// cities.forEach((ar) => console.log(ar));

cities
  .map((mps) => (mps.length > 5 ? mps : ""))
  .forEach((mps) => console.log(mps));
