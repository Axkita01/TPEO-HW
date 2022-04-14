function sumOfSquareAreas (a, b) {
    var sum1 = a * a
    var sum2 = b * b
    return sum1 + sum2
}

function gradeCalculator (homeworkAvg, quizAvg, examAvg) {
    return 0.1 * homeworkAvg + 0.75 * examAvg + 0.15 * quizAvg
}

console.log(sumOfSquareAreas(3, 4))
console.log(sumOfSquareAreas(4, 6))
console.log(sumOfSquareAreas(7, 5))
console.log('\n')
console.log(gradeCalculator (100, 100, 100))
console.log(gradeCalculator ( 75, 99, 96))
console.log(gradeCalculator ( 32, 29, 3))

