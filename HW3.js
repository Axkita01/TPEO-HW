function powersOfThree () {
    //loop i from 0-9
    for (var i = 0; i < 10; i++) {
        console.log(3 ** i)
        //Print extra part if reaches favorite power
        if (i == 3) {
            console.log("This is my favorite power of 3!")
        }
    }
}

function everyTenSeconds () {
    var i = setInterval(everyTenSecondsHelper, 10000);
    setTimeout(clearInterval, 121000, i);
}

function everyTenSecondsHelper() {
    console.log("Hello World!")
}


setTimeout(powersOfThree, 3000);
everyTenSeconds();