//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
//logFunnyJoke - function and logBadJoke - function.
//If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
//And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function funnyJoke() {
  console.log("Why was 6 scared of 7? Because 7 8 9.");
}

function badJoke() {
  console.log("We will live bad, but a short time");
}

jokeCreator(true, funnyJoke, badJoke);
