// 4. Earth and Saturn
function planetLogFunction(planetFunction) {
  planetFunction();
}

function earthLogger() {
  console.log("Earth");
}

function saturnLogger() {
  console.log("Saturn");
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);
