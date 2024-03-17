//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    {
        make : "Apple",
        model : "Macbook",
        year : "2024"
    },
    {
        make : "HP",
        model : "ProBook",
        year : "2022"
    },
    {
        make : "Lenovo",
        model : "ThinkPad",
        year : "2020"
    }
]

laptops.forEach(laptop => 
    console.log(laptop));
    