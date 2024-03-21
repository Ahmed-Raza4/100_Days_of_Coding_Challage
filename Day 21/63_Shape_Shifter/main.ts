//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

//custom type (type alias) for  shapes
type shape = {
    kind: "circle" | "rectangle",
    radius?: number, //radius only for circles
    width?: number, //width of the shape for rectangle
    height?: number, //height of the shape for rectangle
};
//define circle using shape type
let circle: shape = {
    kind: "circle",
    radius: 10,
};
//define rectangle using shape type
let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height: 10,
};
//check what we describe
console.log(circle);
console.log(rectangle);



