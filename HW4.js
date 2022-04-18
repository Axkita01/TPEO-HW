function Car(model, year, color, mpg) {
    this.model = model
    this.year = year
    this.color = color
    this.mpg = mpg
}

var car1 = new Car("Honda Civic", 2017, "Blue", 20);
var car2 = new Car("Honda Accord", 2019, "Red", 32);
var car3 = new Car("BMW 320I", 2017, "Gray", 24);
console.log(car1.mpg);
console.log(car2.mpg);
console.log(car3.mpg);
console.log("\n")

function Vehicle(car) {
    this.car = car
}

var vehicle1 = new Vehicle(car1);
var vehicle2 = new Vehicle(car2);
var vehicle3 = new Vehicle(car3);
console.log(vehicle1.car.mpg);
console.log(vehicle2.car.mpg);
console.log(vehicle3.car.mpg);
