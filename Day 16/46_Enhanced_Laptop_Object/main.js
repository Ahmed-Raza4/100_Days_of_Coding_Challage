//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
//making laptop object
var laptop = {
    make: "HP",
    model: "Pro Book 440",
    year: "2019",
    describe: function () {
        console.log("This is ".concat(laptop.make, " Laptop, model is ").concat(laptop.model, " and the manufacturing date is ").concat(laptop.year, "."));
    }
};
//calling describe function
laptop.describe();
