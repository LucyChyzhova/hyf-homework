class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    let diameter = this.radius * 2
    return diameter.toFixed(2);
  }

  getCircumference() {
    let circumference = this.radius * 2 * Math.PI
    return circumference.toFixed(2);
  }

  getArea() {
    let area = this.radius * this.radius * Math.PI
    return area.toFixed(2);
  }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());

const circleBig = new Circle(30);
console.log(circleBig.getDiameter());
console.log(circleBig.getCircumference());
console.log(circleBig.getArea());

const circlesmall = new Circle(3);
console.log(circlesmall.getDiameter());
console.log(circlesmall.getCircumference());
console.log(circlesmall.getArea());