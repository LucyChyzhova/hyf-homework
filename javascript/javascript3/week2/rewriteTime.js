/*Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
The getCurrentPosition function is probably going to throw an error, 
but that is fine. As long as you can use it as a promise.

Example of usage
setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });*/

const setTimeoutPromise = (timeInMilliseconds) => {
  return new Promise((resolve, reject) => {
    if (timeInMilliseconds) {
      setTimeout(() => {
        resolve("called after 3 seconds");
      }, timeInMilliseconds);
    } else {
      reject("you did not specify time");
    }
  });
};

setTimeoutPromise(3)
  .then((result) => {
    console.log("my promise", result);
  })
  .catch((error) => {
    console.log("error", error);
  });

const getCurrentLocation = (positionIsFound) => {
  return new Promise((resolve, reject) => {
    if (positionIsFound) {
      resolve("you have a good position");
    } else {
      reject("your position has not been found");
    }
  });
};

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log('error:', error);
  });
