//Create funtions that are used in these different ways:

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

let arrayOfItems = [item1, item2, item3];

function toIterate(arrayOfItems) {
  arrayOfItems.forEach((item) => item());
}

toIterate(arrayOfItems);

function item1() {
  console.log("apple");
}
function item2() {
  console.log("banana");
}
function item3() {
  console.log("orange");
}

//Create a function as a const and try creating a function normally. Call both functions.

const sum = function (x, y) {
  return x + y;
};

console.log(sum(2, 3));

function mult(x, y) {
  return x * y;
}
console.log(mult(2, 3));

//Create an object that has a key which value is a function. Try calling this function.

let student = {
  age: function ageCounter(birthYear, currentYear) {
                return currentYear - birthYear;
  }
};

console.log(student.age(1995, 2020));