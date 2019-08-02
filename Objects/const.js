//a constant variable can't be changed once it's delcared. 
//the grade calc from a previous chapter. it makes sense to have some of these as let and some as const


const gradeCalc = function (score, total) {
    const percent = (score / total) * 100
    let letterGrade = '' //this variable gets changed 5 times therefore it could not be a const, it should stay let.

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

const result = gradeCalc(9, 20)
console.log(result)
