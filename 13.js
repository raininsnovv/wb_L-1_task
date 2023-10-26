class Shape {
  constructor(form) {
    this.form = form;
  }
  calcArea() {}
  calcPerimeter() {}
}
class Rectangle extends Shape {
  constructor(form, width, length) {
    super(form);

    this.width = width;
    this.length = length;
  }
  calcArea() {
    return this.length * this.width;
  }
  calcPerimeter() {
    return 2 * (this.length + this.width);
  }
}

class Circle extends Shape {
  constructor(form, radius) {
    super(form);

    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }
  calcPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
class Triangle extends Shape {
  constructor(form, sideA, sideB, sideC) {
    super(form);

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calcArea() {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }

  calcPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
}

const rectangle = new Rectangle("Прямоугольник", 6, 8);
console.log(rectangle);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());

const circle = new Circle("Круг", 7);
console.log(circle.calcArea());
console.log(circle.calcPerimeter());

const triangle = new Triangle("Треугольник", 7, 7, 9);
console.log(triangle.calcArea());
console.log(triangle.calcPerimeter());
