let spritAnimalNames = [
  "Beetle",
  "Berner",
  "Bird Dog",
  "Black Bear",
  "Blackbird",
  "Black Jaguar",
  "Black Panther",
  "Bloodhound",
  "Blue Heron",
  "Blue Jay",
  "Boa Constrictor"
];

function getSpiritAnimalName() {
  let spiritAnimalName = getRandomSpritAnimalName();
  let userName = document.getElementById("fname").value.trim();

  if (userName === "") {
    const errorMessage = "Error FirstName should not be empty!";
    alert(errorMessage);
    console.log(errorMessage);
    return;
  }

  const userAnimalSpiritName = document.getElementById("userAnimalSpiritName");
  userAnimalSpiritName.innerText = userName + " - " + spiritAnimalName;
}

function addSpiritAnimalName() {
  let newSpiritAnimalName = document.getElementById("newSpiritAnimalName").value;
  spritAnimalNames.push(newSpiritAnimalName);
  console.log(spritAnimalNames);
}

function getRandomSpritAnimalName() {
  const spritAnimalNameIndex = Math.floor(Math.random() * spritAnimalNames.length);
  let spritAnimalName = spritAnimalNames[spritAnimalNameIndex];
  return spritAnimalName;
}

