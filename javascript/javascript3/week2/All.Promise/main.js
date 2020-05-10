const redCircle = document.querySelector("ul.marks li:nth-child(1)");
const blueCircle = document.querySelector("ul.marks li:nth-child(2)");
const greenCircle = document.querySelector("ul.marks li:nth-child(3)");


function translateOneByOne() {
    moveElement(redCircle, { x: 20, y: 300 })
    .then(() => {
      console.log('Red circle has been moved');
      return moveElement(blueCircle, { x: 400, y: 300 });
    })
    .then(() => {
      console.log('Blue circle has been moved');
      return moveElement(greenCircle, { x: 400, y: 20 });
    })
    .then(() => {
      console.log('Green circle has been moved');
    });
}

function translateAllAtOnce() {
  Promise.all([
    moveElement(redCircle, { x: 20, y: 300 }),
    moveElement(blueCircle, { x: 400, y: 300 }),
    moveElement(greenCircle, { x: 400, y: 20 }),
  ]).then(() => console.log('All circles has been moved'));
}

translateAllAtOnce();
translateOneByOne();
