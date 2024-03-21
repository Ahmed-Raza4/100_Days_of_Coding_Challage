"use strict";
//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
//define circle using shape type
let circle = {
    kind: "circle",
    radius: 10,
};
//define rectangle using shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 10,
};
//check what we describe
console.log(circle);
console.log(rectangle);
