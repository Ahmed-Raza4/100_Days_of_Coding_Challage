//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// program for calculate the average of all scores given
function AverageScoreCalculator() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var TotalScore = scores.reduce(function (sum, scores) { return sum + scores; }, 0);
    return TotalScore / scores.length;
}
//Example: finding the average of five scores
console.log(AverageScoreCalculator(50, 90, 85, 95, 85));
// Shows the average score
// We add up all the scores, then divide by how many there are
