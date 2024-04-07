/*Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.*/

//q112
let countries = new Map<string, string>();
countries.set("India", "New Delhi");
countries.set("Pakistan", "Islamabad");
countries.set("Bangladesh", "Dhaka");
// console.log(countries);

//q113
// This function checks for "Canada" in the Map and logs its capital
function checkCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {console.log("Canada is not a country in the Map")}
}
checkCanada(countries);
