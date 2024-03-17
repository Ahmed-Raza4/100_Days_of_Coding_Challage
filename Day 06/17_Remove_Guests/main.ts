// question 16: More Guests: You've found a bigger dinner table, so there's room for more guests. 
//add guest
let guests :string[]=["Wajid" , "Inaam", "Asfand"];
//print a message
//console.log("Great news! I found a biggher dinner table");

//adding more guests
guests.unshift("Ahmed Raza");
guests.splice(guests.length / 2 , 0, "Tahir Raza");
guests.push("Asad");

/*print guests name with message
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});*/

//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//firstly print a message
console.log("Unfortunatly! I can only invite two peoples for Dinner.");
//Remove guests
while(guests.length > 2){
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
//print message for invited guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
})
//show an empty list
guests.splice(0, guests.length);
console.log(guests);