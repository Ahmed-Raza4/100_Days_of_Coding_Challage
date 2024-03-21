//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let profile = (function() {
    //User profile
    let name = "Ahmed Raza";
    let age = 27;

    //shared profile part
    return{
        desplayInformations:function() {
            console.log(`Name: ${name}, age: ${age}`);
            
        }
    }
})();
// Asking the profile to tell us about the user
profile.desplayInformations();

