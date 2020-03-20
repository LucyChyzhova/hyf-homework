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
const newNames = names.indexOf(nameToRemove);
if (newNames > -1) {
  names.splice(newNames, 1);
}

// Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
