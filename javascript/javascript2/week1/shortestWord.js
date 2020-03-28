const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

let wordWithMinLength = danishWords[0];

danishWords.forEach(word => {
  if (word.length < wordWithMinLength.length) {
    wordWithMinLength = word;
  }
});

console.log(wordWithMinLength);
