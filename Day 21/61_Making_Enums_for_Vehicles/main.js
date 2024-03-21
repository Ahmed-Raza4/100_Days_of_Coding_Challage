"use strict";
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
//making a list (enum) for different types of vehicles
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["car"] = 0] = "car";
    vehiclesType[vehiclesType["bus"] = 1] = "bus";
    vehiclesType[vehiclesType["rikshaw"] = 2] = "rikshaw";
})(vehiclesType || (vehiclesType = {}));
console.log(vehiclesType.rikshaw);
//creating an object for each type of vehicle
let car = {
    type: vehiclesType.car,
    model: "Toyota",
    color: "red"
};
let bus = {
    type: vehiclesType.bus,
    model: "W-11",
    color: "Yellow"
};
let rikshaw = {
    type: vehiclesType.rikshaw,
    model: "Rozgar",
    color: "Green"
};
console.log(car);
console.log(bus);
