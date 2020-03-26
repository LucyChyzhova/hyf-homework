//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala"
];
const nameToRemove = "Ahmad";

// Write some code here
const foundIndex = names.indexOf(nameToRemove);
if (foundIndex > -1) {
  names.splice(foundIndex, 1);
}

// Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
