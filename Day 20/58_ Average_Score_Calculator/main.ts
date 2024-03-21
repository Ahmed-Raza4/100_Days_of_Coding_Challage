//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// program for calculate the average of all scores given
function AverageScoreCalculator(...scores: number[]):number {
    // Adds all scores together and divides by the number of scores
    let TotalScore=scores.reduce((sum, scores) => sum + scores,0);
    return TotalScore/scores.length;
}
//Example: finding the average of five scores
console.log(AverageScoreCalculator(50,90,85,95,85));
// Shows the average score
// We add up all the scores, then divide by how many there are
