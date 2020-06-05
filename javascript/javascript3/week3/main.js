

/*Class creation time!
Lets create a class called Circle. The circle should be used like this:
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
c1.draw();
Where the constructor should look like this: constructor(x, y, r, startAngle, endAngle, fillColor)
The circle should have one method: draw that draws the circle to the canvas. 
That means that creating an instance of the circle class will not draw the circle. Drawing the circle first happens when we call the draw method.

Test if the new class works by creating a circle and drawing it to the canvas. Try some different radiuses, positions and fill colors.*/

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let centerX = this.x;
    let centerY = this.y;
    let radius = this.r;
  

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let fillColor = "#";
  for (let i = 0; i < 6; i++) {
    fillColor += letters[Math.floor(Math.random() * 16)];
  }
  return fillColor;
}

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createRandomCircle = () => {
  let x = getRandomNum(canvas.width);
  let y = getRandomNum(canvas.height);
  let r = getRandomNum(900);
  let fillColor = getRandomColor();

  const circle = new Circle(x, y, r, 0, 2 * Math.PI, fillColor);
  
  return circle;
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(() => {
  let circle = createRandomCircle();
  circle.draw();
}, 1000); // 100ms is to fast 

