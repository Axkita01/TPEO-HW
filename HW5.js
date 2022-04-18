function reverse(string) {
    var rev = ""
    for (var i = string.length - 1; i >= 0; i--) {
        rev += string[i]
    }
    return rev
}

console.log(reverse("hey"))
console.log(reverse("Hello"))
console.log(reverse("TPEO"))

function numVowels(string) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    var num = 0
    
    for (var i = 0; i < string.length; i++){
        if (vowels.indexOf(string[i]) != -1) {
            num += 1
        }
    }
    return num
}

console.log(numVowels("hey"))
console.log(numVowels("Hello"))
console.log(numVowels("TPEO"))


function numStringsShorterThanLength (strings, length) {
    var count = 0
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            count += 1
        }

    }
    return count
}

console.log(numStringsShorterThanLength(['Lily', 'Alexander', 'Abraham'], 5))
console.log(numStringsShorterThanLength(['Hi', 'Hello', 'Greetings'], 3))
console.log(numStringsShorterThanLength(['Chicken', 'Ham', 'Steak'], 4))
 
