// question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. 
//add guest
let guests :string[]=["Wajid" , "Inaam", "Asfand"];
//print a message
console.log("Great news! I found a biggher dinner table");
//adding more guests
guests.unshift("Ahmed Raza");
guests.splice(guests.length / 2 , 0, "Tahir Raza");
guests.push("Asad");

//print guests name with message
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});