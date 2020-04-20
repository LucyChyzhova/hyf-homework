const string = "happy";
function getFrequency(string) {
  let freq = {};
  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  return freq;
}
console.log(getFrequency(string));
