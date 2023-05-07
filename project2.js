const prompt = require('prompt-sync')();

// First step: Random string generator/Variables
let characters = ['s', 'w', 'g'];
let randompick = Math.floor(Math.random() * characters.length);
let Computerspick = characters[randompick];
console.log(Computerspick);

// vars
let score = 0
let totalRounds = 3

// Second step: MAIN LOGIC OF THE GAME
while (totalRounds > 0) {
    let input = prompt("Let's play snake-water-gun game!\nPlease enter any one, among 's', 'w' and 'g' ")
    if (Computerspick == 's' && input == 'w') {
        console.log("You will get no point!")
        // alert("You will get no point!")
        score -= 1
        totalRounds -= 1
    }
    else if (Computerspick == 's' && input == 'g') {
        console.log("You got a point!")
        // alert("You got a point!")
        score += 1
        totalRounds -= 1
    }
    else if (Computerspick == 's' && input == 's') {
        console.log("It's a draw!")
        // alert("It's a draw!")
        score
        totalRounds -= 1
    }
    else if (Computerspick == 'w' && input == 's') {
        console.log("You got a point!")
        // alert("You got a point!")
        score += 1
        totalRounds -= 1
    }
    else if (Computerspick == 'w' && input == 'g') {
        console.log("You will get no point!")
        // alert("You will get no point!")
        score
        totalRounds -= 1
    }
    else if (Computerspick == 'w' && input == 'w') {
        console.log("It's a draw!")
        // alert("It's a draw!")
        score
        totalRounds -= 1
    }
    else if (Computerspick == 'g' && input == 's') {
        console.log("You will get no point!")
        // alert("You will get no point!")
        score
        totalRounds -= 1
    }
    else if (Computerspick == 'g' && input == 'w') {
        console.log("You got a point!")
        // alert("You got a point!")
        score += 1
        totalRounds -= 1
    }
    else if (Computerspick == 'g' && input == 'g') {
        console.log("It's a draw!")
        // alert("It's a draw!")
        score
        totalRounds -= 1
    }
    randompick = Math.floor(Math.random() * characters.length);
    Computerspick = characters[randompick];
    console.log(Computerspick);
    // playAgain = confirm("do you wish to see this again?")

}

// Third step: TO DECLARE THE SCORE

if (score >= '2') {
    console.log("Congratulations! you Won!")
    // alert("Congratulations! you Won!!!!!!!!!")
} else {
    console.log("Better luck next time!")
    // alert("Better luck next time!")
}
