function countUpwardsByThree () {
    var sum = 0
    for (var i = 0; i <= 10; i++) {
        sum = 3 * i
        console.log(sum)
    }
}

function guessMyFavoriteNumber(guess) {
    //Favorite = 7
    if (guess == 7) {
        console.log("You guessed my favorite number!")
    }
    else {
        console.log("Try again!")
    }
}

function convertNumberToDay (number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break
        default:
            break;
    }
}

countUpwardsByThree()
guessMyFavoriteNumber(7)
guessMyFavoriteNumber(6)
console.log("\n")
convertNumberToDay(0)
convertNumberToDay(1)
convertNumberToDay(2)
convertNumberToDay(3)
convertNumberToDay(4)
convertNumberToDay(5)
convertNumberToDay(6)
