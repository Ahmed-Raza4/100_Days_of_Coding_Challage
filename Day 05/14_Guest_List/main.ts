//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//list of guest
let guest:string[] = ["Wajid", "Asfand", "Jahangeer", "Tahir"];

//create invitation for each person using forEach loop
guest.forEach(invitation => {
    console.log(`Hello Dear ${invitation}, You are invited for dinner Tonight...`);
    })