//Check if we have double clicked on the page.
//A double click is defined by two clicks within 0.5 seconds.
//If a double click has been detected, log out the text: "double click!"

let clicked = false;
let counter = 0;

const listenForClick = function (event) {
  counter++;

  if (counter === 2) {
    clicked = true;
  }

  setTimeout(() => {
    clicked = false;
    counter = 0;
  }, 500);

  if (clicked) {
    console.log("double click!");
  }
};

document.addEventListener("click", listenForClick);
