class Intersection {
  constructor(intersection) {
    this.roadA = new Road([0, 1]);
    this.roadB = new Road([1, 0]);
    this.intersection = intersection;
    this.light = true;
    changeLight();
  }

  changeLight() {
    this.light = !this.light;
    setTimeout(changeLight, 1000);
  }


}

class Road {
  constructor(movement, startX, startY, endX, endY) {
    this.movement = movement;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.cars = [];
  }

  addCar() {
    this.cars.push(new Car(this.startX, this.startY, this.movement));
  }

  moveCars() {
    this.cars.forEach((car, index) => {
      let nextX = car.xCoord + this.movement[0];
      let nextY = car.yCoord + this.movement[1];

      if (index === 0) {
        if (nextX !== this.intersection[0] && nextY !== this.intersection[1]) {
          car.move();
        }
        return;
      }

      let nextCar = this.cars[index - 1];
      if (nextCar.xCoord !== nextX && nextCar.yCoord !== nextY && nextX !== this.intersection[0] && nextY !== this.intersection[1]) {
        car.move();
      }
    });
  }



}

class Car {
  constructor(xCoord, yCoord, movement) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.movement = movement;
  }

  move() {
    let [xDist, yDist] = movement;
    let nextLocation = [xCoord + xDist, yCoord + yDist];


  }


}