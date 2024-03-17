/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
//list of guest
var guest = ["Wajid", "Asfand", "Jahangeer", "Tahir"];
//create invitation for each person using forEach loop
/*guest.forEach(invitation => {
    console.log(`Hello Dear ${invitation}, You are invited for dinner Tonight...`);
    })
*/
//define anable to attend guest
var unableToAttend = "Tahir";
//print unable to attend guest name
console.log("Mr. ".concat(unableToAttend, " unable to attend dinner Tonight"));
//Replace the guest
var newGuest = "Ahmed Raza";
guest[guest.indexOf(unableToAttend)] = newGuest;
//new invitation
guest.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, ", would you like to join me for dinner Tonight?"));
});
