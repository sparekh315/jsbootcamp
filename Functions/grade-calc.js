//two things passed in = student score, total possible score
// total score = 20

// print to screen you got "letter Grade" + percent. 

let gradeCalculator = function (studentScore, totalScore = 20) {
    let percentScore = (studentScore / totalScore) * 100;
    return percentScore;
}

let gradeEarned = gradeCalculator(17)

if (gradeEarned >= 90) {
    console.log(`You Got an A! (${gradeEarned}%)`)
} else if (gradeEarned >= 80) {
    console.log(`You Got a B! (${gradeEarned}%)`)
} else if (gradeEarned >= 70 ) {
    console.log(`You Got a C! (${gradeEarned}%)`)
} else if (gradeEarned >= 60 ) {
    console.log(`You Got a D! (${gradeEarned}%)`)
} else {
    console.log(`You Got an F. (${gradeEarned}%) Please see me after class. `)
}


// This is how he did it. The if statment is inside the function (which is what I wanted to do, but didn't understand how). It's cleaner but does same thing. 
let gradeCalc = function (score, total) {
    let percent = (score / total) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(9, 20)
console.log(result)

