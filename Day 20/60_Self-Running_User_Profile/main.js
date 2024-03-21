//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var profile = (function () {
    //User profile
    var name = "Ahmed Raza";
    var age = 27;
    //shared profile part
    return {
        desplayInformations: function () {
            console.log("Name: ".concat(name, ", age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
profile.desplayInformations();
