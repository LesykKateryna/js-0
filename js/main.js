const pi = 3.14;
class Circle {
  radius;
  constructor(radiusCircle) {
    this.radius = radiusCircle;
  }
  get circleRadius() {
    return `Радіус:${this.radius} см`;
  }

   q() {
    if (this.radius > 0) {
      return true;
    } else
      return this.radius =0;
  }
  get diameter() {
    return this.radius * 2;
  }
  get area() {
    return this.radius * this.radius * pi;
  }
  get length() {
    return 2 * pi * this.radius
  }

}
let circle = new Circle(8);
console.log(circle.circleRadius);
console.log(circle.q());
console.log(`Діаметер кола: ${circle.diameter}см`);
console.log(`Площа кола: ${(circle.area).toFixed(0)} см`);
console.log(`Довжина кола : ${(circle.length).toFixed(0)} см`);