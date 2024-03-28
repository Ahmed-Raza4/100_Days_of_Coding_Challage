//Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

interface car {
    make: string;
    model: string;
    year: number;
    color?: string;
}
let myCar:car = {
    make: "Honda",
    model: "Civic",
    year: 2022
}
myCar.color = "Black";
myCar.year = 2024;

console.log(myCar);
