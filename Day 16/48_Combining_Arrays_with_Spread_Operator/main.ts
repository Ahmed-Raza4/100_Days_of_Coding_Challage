//Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

//sorting price in array
let price1 : number [] = [1000, 3000, 2500];
let price2 : number [] = [1500, 2000, 500];

//declaring array
let sorting : number [] = [];

//pushing value or array price 1 and price 2 to sorting array
for (let i = 0; i< price1.length; i++){
    sorting.push(price1[i]);
    sorting.push(price2[i]);
}
//sorting array
console.log(sorting.sort((a,b) => a-b));

